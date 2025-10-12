import VideoCarousel from '@/components/VideoCarousel'

export default function Home() {
  const videoIds = [
    "d40mVuVLqTE", 
    "Kf7UtsNLw5A",
    "7JI9vmrz8bA",
    "PWOx9DPYoWE",
    "hsEj_K7j_YA",
  ]

  return (
    <div className="bg-primary min-h-screen p-8 lg:p-24">
      <div className="flex flex-col items-center gap-12">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="font-clash text-tertiary text-4xl lg:text-6xl font-bold">ROAHOKI</h1>
          <h1 className="font-clash text-secondary text-xl lg:text-2xl font-bold">Joaquín Peralta (Jota) </h1>
        </div>

        {/* Video Carousel */}
        <VideoCarousel videoIds={videoIds} />
      </div>
    </div>

    
  );
}
