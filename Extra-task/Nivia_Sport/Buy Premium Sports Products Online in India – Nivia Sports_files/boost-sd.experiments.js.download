(() => {
  async function loadResources() {
    const boostSDAppConfig = window.boostSDAppConfig;
    const page = boostSDAppConfig.generalSettings.page;
    const handle = boostSDAppConfig.generalSettings.collection_handle;
    const collection_id = boostSDAppConfig.generalSettings.collection_id;

    // Preload collection_header
    async function preloadCollectionHeader() {
      if (
        (collection_id && handle) ||
        (collection_id === 0 && handle !== 'all' && page === 'collection')
      ) {
        const routesRoot = window?.Shopify?.routes?.root || '/';
        const path = 'collections';

        const res = await fetch(`${routesRoot}${path}/${handle}.json`, {
          method: 'GET',
        });
        const data = await res.json();
        localStorage.setItem('boostSDCollection', JSON.stringify(data));
      }
    }

    try {
      localStorage.removeItem('boostSDCollection');
      preloadCollectionHeader();
    } catch {
      //
    }

    if (boostSDAppConfig.mode === 'development') return;

    const boostThemeLibVersionDefault = '2.1.0';

    const timestamp = Date.now();
    const timestampParams =
      boostSDAppConfig.versioning.invalidateCache.invalidParams || `?v=${timestamp}`;

    const recommendationWidgetPlacementIdPrefix = 'boost-sd-widget-';
    const recommendationWidgetPlacements = document.querySelectorAll(
      `[id^='${recommendationWidgetPlacementIdPrefix}']`
    );
    const hasRecommendationBlock = !!recommendationWidgetPlacements.length;
    const hasFilterBlock = !!document.querySelectorAll('.boost-sd__filter-block').length;

    if (!boostSDAppConfig.themeInfo) {
      boostSDAppConfig.themeInfo = {
        boostThemeLib: 'default',
        boostThemeLibVersion: boostThemeLibVersionDefault,
      };
    }

    const themeInfo = boostSDAppConfig.themeInfo;

    if (!Object.keys(themeInfo.taeFeatures || {}).length) {
      themeInfo.taeFeatures = {
        filterLayout: {
          collection: 'vertical',
          search: 'vertical',
        },
        instantSearch: 'not-installed',
        filterCollection: hasFilterBlock ? 'installed' : 'not-installed',
        filterSearch: hasFilterBlock ? 'installed' : 'not-installed',
        recommendation: hasRecommendationBlock ? 'installed' : 'not-installed',
        env: 'production',
      };
    }

    const taeFeatures = themeInfo.taeFeatures;

    // Fix when metafield not update when add metafields
    if (taeFeatures) {
      if (!taeFeatures.recommendationWidgets) {
        taeFeatures.recommendationWidgets = {};
      }

      if (!taeFeatures.recommendationWidgets['home-page']) {
        taeFeatures.recommendationWidgets['home-page'] = [];
      }

      if (!taeFeatures.recommendationWidgets['collection-page']) {
        taeFeatures.recommendationWidgets['collection-page'] = [];
      }

      if (!taeFeatures.recommendationWidgets['product-page']) {
        taeFeatures.recommendationWidgets['product-page'] = [];
      }

      if (!taeFeatures.recommendationWidgets['cart-page']) {
        taeFeatures.recommendationWidgets['cart-page'] = [];
      }
    }

    const env = taeFeatures.env || 'production';
    const theme = themeInfo.boostThemeLib || 'default';

    const version =
      env === 'staging' ? 'staging' : themeInfo.boostThemeLibVersion || boostThemeLibVersionDefault;

    // Change CDN for refactoring version, need update when releasing for all stores
    // const cdn = boostSDAppConfig.api.cdn || 'https://boost-cdn-staging.bc-solutions.net';
    const cdn =
      env === 'staging'
        ? 'https://boost-cdn-staging.bc-solutions.net'
        : 'https://cdn.boostcommerce.io';

    const featureAssetBaseURL = `${cdn}/theme/${theme}/${version}`;

    const enableFilter =
      (page === 'collection' && taeFeatures.filterCollection === 'installed') ||
      (page === 'search' && taeFeatures?.filterSearch === 'installed');

    const enableSearch = taeFeatures?.instantSearch === 'installed';
    const enableRecommendation = hasRecommendationBlock;

    let assetUrl =
      (boostSDAppConfig && boostSDAppConfig.generalSettings.assets_url) ||
      (window.boostSDAssetFileURL || '').split('boost_sd_assets_file_url.gif')[0];

    if (assetUrl.endsWith('/')) {
      assetUrl = assetUrl.slice(0, -1);
    }

    if (!assetUrl) {
      console.warn('[Boost]: Cannot detect assets url');
    }

    // Invalidate Resources Caching
    const invalidateCacheTime = boostSDAppConfig.versioning.invalidateCache.latestTime;
    const storageKey = 'boostSDVersioningInvalidateCacheTime';
    const latestInvalidateTime = localStorage.getItem(storageKey);
    const needInvalidateCache =
      latestInvalidateTime && Number(latestInvalidateTime) < invalidateCacheTime;

    if (enableFilter) {
      if (page === 'collection' && window?.Shopify?.shop === 'bc-dev-v2-kaylee03.myshopify.com') {
        await preloadFilterAPI();
      }
    }

    function loadResource(script, position = 'body', keySource = 'src') {
      return new Promise((resolve, reject) => {
        if (
          (env === 'staging' || needInvalidateCache) &&
          script[keySource] &&
          !script[keySource].includes(timestampParams)
        ) {
          script[keySource] = script[keySource] + timestampParams;
        }

        script.onload = function () {
          resolve(true);
        };

        script.onerror = function (error) {
          reject(error);
        };

        switch (position) {
          case 'head': {
            document.head.appendChild(script);
          }

          case 'body': {
            document.body.appendChild(script);
          }
        }
      });
    }

    if (assetUrl) {
      const customScript = document.createElement('script');
      customScript.setAttribute(
        'src',
        (boostSDAppConfig && boostSDAppConfig.generalSettings.custom_js_asset_url) ||
          `${assetUrl}/boost-sd-custom.js?v=${timestamp}`
      );
      try {
        await loadResource(customScript, 'body');
      } catch {}
    }

    const integrationExisted = !!boostSDAppConfig.integration;
    const hasFeatureEnabled = enableFilter || enableSearch || enableRecommendation;

    if (integrationExisted && hasFeatureEnabled) {
      const integrationScript = document.createElement('script');
      const version =
        env === 'staging'
          ? 'staging'
          : ((themeInfo.compatibles || {})['3rdIntegration'] || {}).version || '1.0.5';

      integrationScript.src = `${cdn}/integration/${version}/boost-sd-integration.js`;

      try {
        await loadResource(integrationScript, 'body');
      } catch {}
    }

    const featureScripts = [];

    if (!document.querySelector('link#boost-sd-main-css')) {
      const mainStyle = document.createElement('link');
      mainStyle.rel = 'stylesheet';
      mainStyle.type = 'text/css';
      mainStyle.href = `${featureAssetBaseURL}/css/main.css`;
      mainStyle.id = 'boost-sd-main-css';

      try {
        await loadResource(mainStyle, 'body', 'href');
      } catch {}
    }

    if (!document.querySelector('script#boost-sd-vendor')) {
      const vendorScript = document.createElement('script');

      const vendorScriptSrc = `${featureAssetBaseURL}/vendor.js`;

      vendorScript.setAttribute('src', vendorScriptSrc);
      vendorScript.setAttribute('id', 'boost-sd-vendor');
      vendorScript.setAttribute('async', '');

      featureScripts.push({
        script: vendorScript,
        position: 'body',
      });
    }

    if (!document.querySelector('script#boost-sd-main')) {
      const mainScript = document.createElement('script');

      const mainScriptSrc = `${featureAssetBaseURL}/main.js`;

      mainScript.setAttribute('src', mainScriptSrc);
      mainScript.setAttribute('id', 'boost-sd-main');
      mainScript.setAttribute('async', '');

      featureScripts.push({
        script: mainScript,
        position: 'body',
      });
    }

    try {
      await Promise.all(
        featureScripts.map(({ script, position }) => loadResource(script, position))
      );
    } catch {}

    if (!document.querySelector('script#boost-sd-analytic')) {
      const analyticScript = document.createElement('script');
      const analyticVersion =
        env === 'staging'
          ? 'staging'
          : ((themeInfo.compatibles || {}).analytic || {}).version || '1.3.6';

      const analyticsScriptSrc = `${cdn}/analytic/${analyticVersion}/boost-sd-analytic.js`;

      analyticScript.setAttribute('src', analyticsScriptSrc);
      analyticScript.setAttribute('id', 'boost-sd-analytic');
      analyticScript.setAttribute('async', '');

      try {
        loadResource(analyticScript, 'body');
      } catch {}
    }

    if (assetUrl) {
      const customCSSLink = document.createElement('link');
      customCSSLink.rel = 'stylesheet';
      customCSSLink.type = 'text/css';
      customCSSLink.href =
        (boostSDAppConfig && boostSDAppConfig.generalSettings.custom_css_asset_url) ||
        `${assetUrl}/boost-sd-custom.css?v=${timestamp}`;

      try {
        await loadResource(customCSSLink, 'body');
      } catch {}
    }

    if (
      !latestInvalidateTime ||
      (latestInvalidateTime && Number(latestInvalidateTime) < invalidateCacheTime)
    ) {
      localStorage.setItem(storageKey, invalidateCacheTime);
    }

    /**
     * Generates a random unique session ID
     * @return {string} random unique ID
     */
    function generateUUID() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = (Math.random() * 16) | 0,
          v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      });
    }

    function getBoostPFSSectionId() {
      let value = localStorage.getItem('boostSDSessionId');
      if (!value) {
        value = generateUUID();
        localStorage.setItem('boostSDSessionId', value);
      }
      return value;
    }

    function addParamsLocale(params) {
      if (parseFloat(`${window.Shopify?.currency?.rate}`) === 1) return params;

      return {
        ...params,
        currency_rate: window.Shopify?.currency?.rate,
        currency: window.Shopify?.currency?.active,
        country: window.Shopify?.country,
        return_all_currency_fields: false,
      };
    }

    function checkProductAvailableAndVariantAvailable() {
      const boostSDAppConfig = window.boostSDAppConfig || {};

      const availableAfterFiltering = boostSDAppConfig?.filterSettings?.availableAfterFiltering;
      const productAndVariantAvailable =
        boostSDAppConfig?.filterSettings?.productAndVariantAvailable;

      let product_available = false;
      let variant_available = false;
      if (!availableAfterFiltering && productAndVariantAvailable) {
        //hide: availableAfterFiltering:false, productAndVariantAvailable:true
        product_available = true;
        variant_available = true;
      }

      return { product_available, variant_available };
    }

    function getSortSetting() {
      const boostSDAppConfig = window.boostSDAppConfig || {};

      const value = boostSDAppConfig.additionalElementSettings?.default_sort_order?.all;
      if (value) return value;

      return boostSDAppConfig.generalSettings?.default_sort_by || 'title-ascending';
    }

    async function preloadFilterAPI() {
      const { filterUrl } = window.boostSDAppConfig?.api || {};

      const PATH = filterUrl || 'https://services.mybcapps.com/bc-sf-filter/filter';
      const HTTP_STATUS_NEED_FALLBACK = [404, 403, 500];

      const { product_available, variant_available } = checkProductAvailableAndVariantAvailable();

      let defaultParams = {
        t: Date.now(),
        _: 'pf',
        shop: window.Shopify?.shop,
        page: 1,
        limit: 24, // consider 16
        sort: getSortSetting(),
        locale: window.boostSDAppConfig.generalSettings?.current_locale || DEFAULT_LOCALE,
        event_type: 'init',
        build_filter_tree: true,
        sid: getBoostPFSSectionId(),
        pg: 'collection_page',
        product_available,
        variant_available,
        collection_scope: 0,
        collectionId: window.boostSDAppConfig.generalSettings?.collection_id || 0,
        handle: window.boostSDAppConfig.generalSettings?.collection_handle || 'all',
        urlScheme: 2,
        zero_options: true,
      };

      defaultParams = addParamsLocale(defaultParams);

      const params = new URLSearchParams(defaultParams);

      let enableProductFilterFallback = false;
      const response = await fetch(`${PATH}?${params}`, { method: 'GET' }).then((res) => {
        const { status } = res;
        if (HTTP_STATUS_NEED_FALLBACK.includes(status)) {
          enableProductFilterFallback = true;
        }

        return res;
      });

      window.filterPreloadValue = {};
      filterPreloadValue.preloadParams = defaultParams;
      filterPreloadValue.resData = response?.json();
      filterPreloadValue.enableProductFilterFallback = enableProductFilterFallback;
    }
  }

  if (window.boostSDLoadConfig && window.boostSDLoadConfig.lazy) {
    const targetElement = window.boostSDLoadConfig.targetElement || window;
    targetElement.addEventListener('DOMContentLoaded', loadResources);
  } else {
    loadResources();
  }
})();
