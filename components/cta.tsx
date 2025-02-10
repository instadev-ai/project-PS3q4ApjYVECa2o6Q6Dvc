import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export function CTA() {
  return (
    <section className="py-24 bg-primary">
      <div className="container">
        <motion.div 
          className="text-center text-primary-foreground max-w-[800px] mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to create your first landing page?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of satisfied customers and start creating beautiful landing pages today.</p>
          <Button size="lg" variant="secondary" className="text-lg h-12 px-8">
            Get Started Free
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
