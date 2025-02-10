import { motion } from 'framer-motion'
import { ArrowRight, Wand2, Zap, Shield, BarChart } from 'lucide-react'

export function Features() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need to succeed</h2>
          <p className="text-muted-foreground text-lg max-w-[600px] mx-auto">Our platform provides all the tools you need to create, launch, and optimize your landing pages.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="p-6 rounded-xl border bg-background hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <feature.icon className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const features = [
  {
    title: 'Drag & Drop Builder',
    description: 'Create stunning pages with our intuitive drag and drop interface. No coding required.',
    icon: Wand2
  },
  {
    title: 'Lightning Fast',
    description: 'Optimized for speed and performance. Your pages will load instantly.',
    icon: Zap
  },
  {
    title: 'Enterprise Security',
    description: 'Bank-grade security to keep your data safe and your mind at peace.',
    icon: Shield
  },
  {
    title: 'Advanced Analytics',
    description: 'Detailed insights and analytics to help you optimize your pages.',
    icon: BarChart
  }
]
