import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export function Pricing() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, transparent pricing</h2>
          <p className="text-muted-foreground text-lg">No hidden fees. No surprises.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`p-8 rounded-xl bg-background border ${plan.featured ? 'border-primary shadow-lg' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-muted-foreground mb-6">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <Button className="w-full mb-6" variant={plan.featured ? 'default' : 'outline'}>
                Get Started
              </Button>
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-muted-foreground">
                    <Check className="h-4 w-4 mr-2 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for small projects',
    price: 29,
    features: [
      'Up to 5 landing pages',
      'Basic analytics',
      'Standard support',
      'Custom domains'
    ]
  },
  {
    name: 'Pro',
    description: 'For growing businesses',
    price: 79,
    featured: true,
    features: [
      'Unlimited landing pages',
      'Advanced analytics',
      'Priority support',
      'Custom domains',
      'A/B testing',
      'Team collaboration'
    ]
  },
  {
    name: 'Enterprise',
    description: 'For large organizations',
    price: 199,
    features: [
      'Everything in Pro',
      'Dedicated support',
      'Custom integrations',
      'SLA guarantee',
      'Advanced security',
      'Custom branding'
    ]
  }
]
