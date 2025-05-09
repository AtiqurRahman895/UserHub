import { useMemo } from "react";
import CreateUserForm from "./Components/UsersComponents/CreateUserForm";
import UseNormalAxios from "./Hooks/UseNormalAxios";
import UseUrlQuery from "./Hooks/UseUrlQuery";
import { useQuery } from "@tanstack/react-query";
import NextPreButtons from "./Components/CommonComponents/NextPreButtons";
import UsersTable from "./Components/UsersComponents/UsersTable";

function App() {
  const {pageNo} = UseUrlQuery();
  const normalAxios = UseNormalAxios()

  const memorizedPageNo=useMemo(()=> pageNo,[pageNo])

  const fetchUsers= async() => {
      const res=await normalAxios.get(`/api/users?page=${pageNo}`)
      return res.data.data
  };

  const { isLoading, data: usersData = {}, refetch } = useQuery({
    queryKey: ['users', memorizedPageNo],
    queryFn: fetchUsers,
    onError: (error) => {
      console.error("Error fetching users:", error);
    }
  });

  return (
    <main className="space-y-16 py-16">
      <CreateUserForm refetch={refetch}/>

      <section className="container space-y-4">
  
        <h2 className="text-custom-primary font-semibold">Total Users: {usersData.pagination?.total}</h2>  
        
        <UsersTable loading={isLoading} users={usersData.users} />

        <NextPreButtons maxPage={usersData.pagination?.pages}/>

      </section>
      
    </main>
  );
}

export default App;
