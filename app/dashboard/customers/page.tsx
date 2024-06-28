import { fetchCustomers } from "@/app/lib/data"

export default async function Page(){
let customers = await fetchCustomers()
    return <>{customers.map(customer=>(
        <p key={customer.id}>{customer.name}</p>
    ))}</>
}