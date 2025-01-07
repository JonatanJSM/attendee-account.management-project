export default function Testimonials() {
    const testimonials = [
      { name: "Alice Johnson", role: "CEO, TechCorp", quote: "daisyLanding has transformed our business operations." },
      { name: "Bob Smith", role: "Freelancer", quote: "I can't imagine working without daisyLanding now." },
      { name: "Carol Williams", role: "Marketing Manager", quote: "The analytics features are a game-changer for our campaigns." }
    ]
  
    return (
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="carousel w-full">
            {testimonials.map((testimonial, index) => (
              <div key={index} id={`slide${index + 1}`} className="carousel-item relative w-full">
                <div className="flex flex-col items-center justify-center w-full px-4">
                  <blockquote className="text-lg italic mb-4">&quot;{testimonial.quote}&quot;</blockquote>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm">{testimonial.role}</p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href={`#slide${index === 0 ? testimonials.length : index}`} className="btn btn-circle">❮</a> 
                  <a href={`#slide${index === testimonials.length - 1 ? 1 : index + 2}`} className="btn btn-circle">❯</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  