export default function Pricing() {
    const plans = [
      { name: "Basic", price: "$9.99", features: ["1 User", "Basic Features", "1GB Storage"] },
      { name: "Pro", price: "$19.99", features: ["5 Users", "Pro Features", "10GB Storage"] },
      { name: "Enterprise", price: "$49.99", features: ["Unlimited Users", "All Features", "Unlimited Storage"] }
    ]
  
    return (
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className="card bg-base-200 shadow-xl">
                <div className="card-body">
                  <h3 className="card-title">{plan.name}</h3>
                  <p className="text-2xl font-bold">{plan.price}/month</p>
                  <ul className="list-disc list-inside mb-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Choose Plan</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  