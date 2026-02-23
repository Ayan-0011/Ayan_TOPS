import { useDispatch, useSelector } from 'react-redux'
import { fetchGif, fetchPhotos, fetchVideos } from '../Api/mediaApi'
import { useEffect } from 'react'
import { setError, setLoading, setResults } from '../redux/features/serchSlice'
import ResultCard from './ResultCard'

const ResultGrid = () => {

  const dispatch = useDispatch()
  const { quary, activeTab, loading, results, error } = useSelector((state) => state.serch)



  useEffect(() => {
    const getData = async () => {

      try {

        dispatch(setLoading())
        let data

        if (!quary) { return <h1>Type Something.....</h1> }

        if (activeTab == 'photo') {
          let response = await fetchPhotos(quary)
          data = response.results.map((val) => ({
            id: val.id,
            type: 'photo',
            title: val.alt_description,
            thumbnail: val.urls.small,
            src: val.urls.full,

          }))
        }

        if (activeTab == 'video') {
          let response = await fetchVideos(quary)
          data = response.videos.map((val) => ({
            id: val.id,
            type: "video",
            title: val.user.name || 'video',
            thumbnail: val.image,
            src: val.video_files[0].link,
          }))
          console.log(data);
        }

        if (activeTab == 'gif') {
          let response = await fetchGif(quary)
          data = response.data.map((val) => ({
            id: val.id,
            title: val.title,
            type: 'gif',
            thumbnail: val.images.fixed_width_small_still.url,
            src: val.images.original.url
          }))
        }


        dispatch(setResults(data))

      } catch (error) {
        dispatch(setError(error.message || "Something went wrong"))
      }
    }

    getData();
  }, [quary, activeTab]);


  if(error) return <h1>Error</h1>
  if(loading) return <h1>Loading....</h1>



  return (
    <div className='flex justify-between px-10 w-full flex-wrap gap-6 h-auto py-5'>
      {
        results.map((items, idx)=>{
          return <>
            <div key={idx}>
                <ResultCard items={items}/>
            </div>
          </>
        })  
      }
    </div>
  )
}

export default ResultGrid
