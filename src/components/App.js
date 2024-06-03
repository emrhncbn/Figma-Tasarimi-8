const App = () => {
  return (
    <div className="h-screen relative overflow-hidden">
      <img className="absolute bottom-0 left-0 w-800 h-600" src="https://figma-8.vercel.app/Ellipse%201.png" alt="Ellipse 1"></img>
      <img className="absolute top-0 right-0 w-500 h-650" src="https://figma-8.vercel.app/Ellipse%202.png" alt="Ellipse 2"></img>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="flex items-center justify-center h-full overflow-hidden">
          <div className="flex flex-col bg-opacity-100 p-2 pr-10 pt-10 pl-10 rounded-3xl shadow-xl">
            <h1 className="text-7xl font-semibold text-[#39a464]">LOGIN</h1>
            <input className="border w-[350px] h-[50px] pl-4 mt-5 rounded-xl" type="text" placeholder="Username"></input>
            <input className="border w-[350px] h-[50px] pl-4 mt-5 rounded-xl" type="password" placeholder="Password"></input>
            <button className="bg-[#39a464] flex justify-center items-center text-white text-xl w-[250px] h-[50px] mt-5 rounded-xl border hover:bg-white hover:border-[#39a464] hover:text-[#39a464]">Login</button>
            <div className="flex items-center my-5">
              <hr className="flex-grow bg-slate-950"></hr>
              <span className="text-black text-xl mx-5">OR</span>
              <hr className="flex-grow bg-slate-950"></hr>
            </div>
            <div className="flex justify-center">
              <a href="#" className="pr-6"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" height="30" width="30"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24 c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657 C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571 c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path></svg></a>
              <a href="#" className="pl-6"><svg stroke="currentColor" fill="#1976D2" strokeWidth="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" height="30" width="30"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg></a>
            </div>
            <div className="flex justify-between pt-12 pb-2 text-[#39a464]">
              <a href="#">Forgot password</a>
              <a href="#">Register</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
