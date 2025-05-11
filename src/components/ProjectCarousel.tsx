"use client"

import type React from "react"
import { useState } from "react"
import type { Swiper as SwiperType } from 'swiper'
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, A11y, EffectFade } from "swiper/modules"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "../lib/utils"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-fade"

interface ProjectCarouselProps {
  images: string[]
  title: string
  className?: string
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ images, title, className }) => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  // If there's only one image, just render it without the carousel
  if (images.length === 1) {
    return (
      <div className={cn("aspect-square relative", className)}>
        <img src={images[0] || "/placeholder.svg"} alt={title} className="object-cover w-full h-full rounded-t-lg" />
      </div>
    )
  }

  return (
    <div className={cn("aspect-square relative group", className)}>
      <Swiper
        modules={[Navigation, Pagination, A11y, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        pagination={{ clickable: true }}
        onSwiper={setSwiper}
        onSlideChange={(swiper: SwiperType) => setActiveIndex(swiper.activeIndex)}
        className="aspect-square"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="aspect-square relative">
            <img
              src={image || "/placeholder.svg"}
              alt={`${title} - ${index + 1}`}
              className="object-cover w-full h-full rounded-t-lg"
            />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom navigation buttons */}
      <button
        onClick={() => swiper?.slidePrev()}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={() => swiper?.slideNext()}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Next image"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Image counter */}
      <div className="absolute bottom-4 right-4 bg-black/50 text-white text-xs px-2 py-1 rounded-md z-10">
        {activeIndex + 1} / {images.length}
      </div>
    </div>
  )
}

export default ProjectCarousel
