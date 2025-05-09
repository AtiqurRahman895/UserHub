import { useState } from "react";
import UseGetDateInYMDFormat from "../../Hooks/UseGetDateInYMDFormat";
import UseNormalAxios from "../../Hooks/UseNormalAxios";
import { toast } from "react-toastify";

function CreateUserForm({refetch}) {
  const YDMformatDate= UseGetDateInYMDFormat()
  const normalAxios= UseNormalAxios()
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    emailAddress: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit= async (e) => {
    e.preventDefault();
    try {
      await normalAxios.post("/api/users", form)
      refetch()
      setForm({
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        gender: "",
        emailAddress: "",
      })
      toast.success("New user creation is successfull!")
    } catch (error) {
      toast.error("Unable to create new user!")
      console.error(`Unable to create new user: ${error}`)
    }
  }

  return (
    <section className="">
      <div className="container flex items-center justify-center">
        <div className="fromWrapper max-w-sm sm:max-w-md">
          <h1 className="text-5xl font-bold pb-3">Create a new user now!</h1>
          <form onSubmit={handleSubmit} className="card-body p-0">

            <div className="flex flex-col sm:flex-row gap-2">

              <div className="flex-1">
                <label className="label flex flex-col gap-2 items-start">
                  <span className="">First Name</span>
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    className="input input-ghost input-bordered w-full"
                    minLength={3}
                    required
                  />
                </label>
              </div>

              <div className="flex-1">
                <label className="label flex flex-col gap-2 items-start">
                  <span className="">Last Name</span>
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    className="input input-ghost input-bordered w-full"
                    minLength={3}
                    required
                  />
                </label>
              </div>

            </div>

            <label className="label flex flex-col gap-2 items-start">
              <span className="">Date Of Birth</span>
              <input
                type="date"
                name="dateOfBirth"
                max={YDMformatDate()}
                value={form.dateOfBirth}
                onChange={handleChange}
                className="input input-ghost input-bordered w-full"
                required
              />
            </label>

            <label className="label flex flex-col gap-2 items-start">
              <span className="">Gender</span>
            
              <select
                name="gender"
                value={form.gender}
                onChange={handleChange}
                className="select select-ghost select-bordered w-full"
                required
              >
                <option value={""} disabled hidden>
                  Pick gender
                </option>
                <option value={"male"}>Male</option>
                <option value={"Female"}>Female</option>
              </select>
            </label>

            <label className="label flex flex-col gap-2 items-start">
              <span className="">Email</span>
              <input
                type="email"
                name="emailAddress"
                value={form.emailAddress}
                onChange={handleChange}
                className="input input-ghost input-bordered w-full"
                required
              />
            </label>

            <div className="mt-6">
              <button className="formSubmitBtn">Create</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CreateUserForm;
