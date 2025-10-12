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
    <div className="bg-primary min-h-screen w-full p-8 lg:p-24">
      <div className="flex flex-col items-center gap-12 min-h-screen">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="font-clash text-tertiary text-4xl lg:text-6xl font-bold">ROAHOKI</h1>
          <h1 className="font-clash text-secondary text-xl lg:text-2xl font-bold">Joaquín Peralta (Jota) </h1>
        </div>

        {/* Video Carousel */}
        <VideoCarousel videoIds={videoIds} />
        
        {/* Espaciador para asegurar que el fondo negro se extienda */}
        <div className="flex-grow w-full bg-primary"></div>
      </div>
    </div>
  );
}
