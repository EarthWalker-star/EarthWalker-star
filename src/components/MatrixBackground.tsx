interface MatrixBackgroundProps {
  image?: string
  brightness?: number
}

export default function MatrixBackground({ image, brightness = 0.2 }: MatrixBackgroundProps) {
  return (
    <div
      className="absolute inset-0 w-full h-full"
      style={{
        backgroundImage: image ? `url(${image})` : 'url(/project1.png)',
        backgroundSize: 'cover',
        backgroundPosition: image ? 'left center' : 'right center',
        backgroundRepeat: 'no-repeat',
        opacity: brightness,
        pointerEvents: 'none',
      }}
    />
  )
}
