import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pt-24 pb-32">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
      
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="container relative">
        <div className="mx-auto max-w-[980px] text-center">
          {/* Main Heading */}
          <motion.h1 
            className="bg-gradient-to-br from-foreground to-foreground/80 bg-clip-text text-transparent text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Create beautiful landing pages in seconds...
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            className="text-muted-foreground text-xl md:text-2xl mb-12 mx-auto max-w-[700px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Design and launch stunning landing pages without any coding. Our drag-and-drop builder makes it simple to create professional pages that convert.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button size="lg" className="text-lg h-12 px-8">
              Get Started Free
            </Button>
            <Button size="lg" variant="outline" className="text-lg h-12 px-8">
              Watch Demo
            </Button>
          </motion.div>

          {/* Social Proof */}
          <motion.div 
            className="mt-16 pt-8 border-t border-border/40 flex items-center justify-center gap-8 text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-sm">Trusted by 10,000+ companies worldwide</p>
            {/* Add company logos here */}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
