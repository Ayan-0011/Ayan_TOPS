(function () {
if (typeof window.SwymStorefrontLayoutContext === 'undefined') {
  window.SwymStorefrontLayoutContext = {};
}
if(typeof window.SwymStorefrontLayoutExtensions === 'undefined'){
  window.SwymStorefrontLayoutExtensions = {};
}

class SwymWishlistStorefrontLayout extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.StorefrontLayoutType = SwymStorefrontLayoutContext?.Settings?.StorefrontLayoutType;
    this.renderUI();
    SwymStorefrontLayoutExtensions.SwymStorefrontLayoutPageActions = document.querySelector('swym-storefront-layout-actions#swym-storefront-layout-actions-target-page');
  }

  renderUI(){
    let elementTag;
    switch (this.StorefrontLayoutType) {
      case 'as-drawer':
        elementTag = 'swym-storefront-layout-as-drawer';
        break;
      case 'as-section':
        elementTag = 'swym-storefront-layout-as-section';
        break;
      case 'as-modal':
        elementTag = 'swym-storefront-layout-as-modal';
        break;
      default:
        window._swat?.utils.error(`Unknown StorefrontLayoutType: ${this.StorefrontLayoutType}`);
        return;
    }
    
    this.innerHTML = `
        <${elementTag} ${this.StorefrontLayoutType==='as-section'?`container-id="${SwymStorefrontLayoutContext?.Settings.StorefrontLayoutAsSectionContainerId}"`:''}></${elementTag}>
        <swym-storefront-layout-notification id="swym-storefront-layout-notification" class="swym-storefront-layout-notification-position-${SwymStorefrontLayoutContext?.Settings?.StorefrontLayoutNotificationPosition}"></swym-storefront-layout-notification>
        <swym-storefront-layout-actions id="swym-storefront-layout-actions-target-page" class="swym-storefront-layout-action-for-wishlist-${this.StorefrontLayoutType} swym-storefront-layout-action-popup-position-${SwymStorefrontLayoutContext?.Settings?.StorefrontLayoutActionPopupPosition}"></swym-storefront-layout-actions>
        <swym-storefront-layout-action-tooltip id="swym-storefront-layout-action-tooltip-target-page" class="swym-storefront-layout-action-tooltip-for-wishlist-${this.StorefrontLayoutType}"></swym-storefront-layout-action-tooltip>
      `
      this.classList.add(`${elementTag}`);
  }

}

customElements.define('swym-storefront-layout', SwymWishlistStorefrontLayout);
})();