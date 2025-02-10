import { motion } from 'framer-motion'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by thousands</h2>
          <p className="text-muted-foreground text-lg">Don't just take our word for it</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="p-6 rounded-xl bg-muted"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <Avatar className="h-10 w-10 mr-4">
                  <AvatarImage src={testimonial.avatar} />
                  <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-muted-foreground">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    quote: 'This platform has transformed how we create landing pages. The speed and ease of use is incredible.',
    avatar: '/avatars/sarah.jpg'
  },
  {
    name: 'Michael Chen',
    role: 'Startup Founder',
    quote: 'We've increased our conversion rates by 40% since switching to this platform. The results speak for themselves.',
    avatar: '/avatars/michael.jpg'
  },
  {
    name: 'Emma Davis',
    role: 'Product Manager',
    quote: 'The analytics and insights have been game-changing for our marketing strategy. Highly recommended!',
    avatar: '/avatars/emma.jpg'
  }
]
