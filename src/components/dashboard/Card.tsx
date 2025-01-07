interface CardProps {
    title: string
    value: string
  }
  
  export default function Card({ title, value }: CardProps) {
    return (
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="text-3xl font-bold">{value}</p>
        </div>
      </div>
    )
  }
  
  