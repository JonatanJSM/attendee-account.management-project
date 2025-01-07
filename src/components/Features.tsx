export default function Features() {
    const features = [
      { title: "Easy to Use", description: "Our intuitive interface makes it simple to get started." },
      { title: "Powerful Analytics", description: "Gain insights with our advanced analytics tools." },
      { title: "24/7 Support", description: "Our team is always here to help you succeed." }
    ]
  
    return (
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card bg-base-200 shadow-xl">
                <div className="card-body">
                  <h3 className="card-title">{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  