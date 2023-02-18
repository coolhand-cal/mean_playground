import { useEffect,useState } from "react"
const Home = () => {
    //state of data will change and needs to be set and named
    const [clients,setClients] = useState(null)
//use effect used to fetch data
useEffect(() => {
    const fetchClients = async () => {
        const response = await fetch('/api/clients')
        const json = await response.json()

        console.log (`say sum`)
        if (response.ok){
            console.log (`im heard`)
            setClients(json)
        }
    }
    fetchClients()
},[])
   
//note the {clients} is used to cycle through and map clients
    return (
        <div classname="home">
            <h2> Home</h2>
            <p>testing...</p>
           
            <div classname="clients">
            <h3>Clients</h3>
            {clients && clients.map((client) =>(
                <div>
                    <p key={client._id}>Name: {client.firstName} , {client.lastName}</p>
                    <p key={client._id}>insurance company: {client.insuranceCompany} , {client.policyNum}</p>
                </div>
            ))}
             
            <p>almost huh</p>
            </div>
        </div>
       
    )}
export default Home 
