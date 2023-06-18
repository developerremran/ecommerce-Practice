
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import useContextProvider from '../../CustomHook/useContextProvider';

const ManageUsers = () => {
  const {user} = useContextProvider();
  const { data: users = [], refetch } = useQuery(['users'], async () => {
    const res = await fetch('http://localhost:5000/users')
    return res.json()

  })
  const PermisonHendler =(id)=>{
    console.log(id);
    fetch(`http://localhost:5000/users/admin/${id}`,{
      method:'PATCH'
    })
    .then(res=> res.json())
    .then(data => {
      console.log(data);
      if(data.modifiedCount){
        refetch();
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: `${user.name} is an Admin Now!`,
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
    .catch(error => console.log(error))
    
  }

  const deleteOne = (id) => {
  fetch(`http://localhost:5000/users/admin/${id}`,{
    method:'DELETE'
  })
  .then(res=> res.json())
  .then(data=> {
    console.log(data)
    if(data.deletedCount === 1){
      refetch()
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: `User Deleted Success`,
        showConfirmButton: false,
        timer: 1500
      })
    }
  } )

  }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className='text-lg font-bold'>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Position</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              users.map((user, index) => <tr key={user._id} className="bg-base-200">
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{ }</td>
                <td className='flex gap-16  items-center'>
                  {user.role === 'admin' ? 'admin' :
                    <button onClick={()=>PermisonHendler(user._id)} className='w-[100px] btn btn-sm btn-warning'>Admin</button>}
                  <button onClick={()=> deleteOne(user._id)} className='w-[100px] btn btn-sm btn-warning'>Delete</button>
                </td>
              </tr>)
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;