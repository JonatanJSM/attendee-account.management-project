import Card from '@/components/dashboard/Card'
import Chart from '@/components/dashboard/Chart'

export default function DashboardHome() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card title="Total Users" value="1,234" />
      <Card title="Total Revenue" value="$12,345" />
      <Card title="Active Projects" value="42" />
      <Card title="Conversion Rate" value="2.3%" />
      <div className="md:col-span-2 lg:col-span-4">
        <Chart />
      </div>
    </div>
  )
}

