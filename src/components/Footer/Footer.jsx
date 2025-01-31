const Footer = () => {
  return (
    <div>
      <footer className=" bg-base-200">
       
      <div className="text-center py-2">
              <h1 className="text-3xl font-bold">Gadget Heaven</h1>
              <p className="text-gray-700">Leading the way in cutting-edge technology and innovation.</p>
          </div>

          <hr className=" text-gray-400 mx-10" />
         
        <div className=" footer footer-center grid grid-cols-3 sm:footer-horizontal bg-base-200 text-base-content p-10">
             
        
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
