'use client'

import { useState, useEffect } from 'react'

interface VideoCarouselProps {
  videoIds: string[]
}

interface VideoThumbnailProps {
  videoId: string
  onPlay: () => void
}

function VideoThumbnail({ videoId, onPlay }: VideoThumbnailProps) {
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
  const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`

  const handlePlayClick = (e: React.MouseEvent) => {
    e.preventDefault()
    onPlay()
  }

  const handleYouTubeRedirect = (e: React.MouseEvent) => {
    e.preventDefault()
    window.open(youtubeUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-lg bg-black/20 hover:bg-black/30 transition-all duration-300">
        <div className="aspect-video relative">
          <img 
            src={thumbnailUrl}
            alt={`Video thumbnail ${videoId}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          
          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-all duration-300">
            <button
              onClick={handlePlayClick}
              className="bg-tertiary hover:bg-red-700 text-secondary rounded-full p-4 transform hover:scale-110 hover:cursor-pointer transition-all duration-200 shadow-lg"
              aria-label={`Reproducir video ${videoId}`}
            >
              <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </button>
          </div>

          {/* YouTube redirect button */}
          <button
            onClick={handleYouTubeRedirect}
            className="absolute top-2 right-2 bg-black/60 hover:bg-black/80 text-secondary p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200"
            aria-label={`Ver en YouTube ${videoId}`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

function VideoPlayer({ videoId, onClose }: { videoId: string, onClose: () => void }) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl aspect-video">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-secondary hover:text-gray-300 transition-colors"
          aria-label="Cerrar video"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full rounded-lg"
        />
      </div>
    </div>
  )
}

export default function VideoCarousel({ videoIds }: VideoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleVideos, setVisibleVideos] = useState(4)
  const [playingVideo, setPlayingVideo] = useState<string | null>(null)

  // Ajustar número de videos visibles basado en el tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleVideos(1)
      } else if (window.innerWidth < 1024) {
        setVisibleVideos(2)
      } else if (window.innerWidth < 1280) {
        setVisibleVideos(3)
      } else {
        setVisibleVideos(4)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const maxIndex = Math.max(0, videoIds.length - visibleVideos)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => Math.min(maxIndex, prevIndex + 1))
  }

  const handlePlayVideo = (videoId: string) => {
    setPlayingVideo(videoId)
  }

  const handleCloseVideo = () => {
    setPlayingVideo(null)
  }

  if (videoIds.length === 0) {
    return null
  }

  const visibleVideoIds = videoIds.slice(currentIndex, currentIndex + visibleVideos)

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Título */}
      <div className="mb-6">
        <h2 className="font-clash text-secondary text-2xl ">Últimas publicaciones</h2>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Navigation Button Left */}
        {currentIndex > 0 && (
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-all duration-200 z-10 shadow-lg"
            aria-label="Videos anteriores"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Videos Grid */}
        <div className="bg-tertiary/20 backdrop-blur-sm p-6 rounded-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {visibleVideoIds.map((videoId, index) => (
              <VideoThumbnail
                key={`${videoId}-${currentIndex + index}`}
                videoId={videoId}
                onPlay={() => handlePlayVideo(videoId)}
              />
            ))}
          </div>
        </div>

        {/* Navigation Button Right */}
        {currentIndex < maxIndex && (
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-all duration-200 z-10 shadow-lg"
            aria-label="Siguientes videos"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>

      {/* Progress Indicator */}
      {videoIds.length > visibleVideos && (
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: maxIndex + 1 }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? 'w-8 bg-tertiary' 
                  : 'w-2 bg-secondary/40 hover:bg-secondary/60'
              }`}
              aria-label={`Ir a la página ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Video Player Modal */}
      {playingVideo && (
        <VideoPlayer
          videoId={playingVideo}
          onClose={handleCloseVideo}
        />
      )}
    </div>
  )
}