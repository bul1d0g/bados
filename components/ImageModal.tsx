'use client'

import { useEffect, memo } from 'react'
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Image from 'next/image'

interface ImageModalProps {
  images: string[]
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}

const ImageModal = memo(function ImageModal({ images, currentIndex, isOpen, onClose, onNext, onPrev }: ImageModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return
      
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowLeft') {
        onPrev()
      } else if (e.key === 'ArrowRight') {
        onNext()
      }
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose, onNext, onPrev])

  if (!isOpen) return null

  return (
    <div className="image-modal-overlay" onClick={onClose}>
      <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="image-modal-close" onClick={onClose}>
          <FaTimes />
        </button>
        
        <button className="image-modal-nav image-modal-prev" onClick={onPrev}>
          <FaChevronLeft />
        </button>
        
        <div className="image-modal-image-wrapper">
          <Image
            src={images[currentIndex]}
            alt={`Bados Gym Interior ${currentIndex + 1}`}
            width={1200}
            height={800}
            className="image-modal-image"
            priority
          />
          <div className="image-modal-counter">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
        
        <button className="image-modal-nav image-modal-next" onClick={onNext}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  )
})

export default ImageModal
