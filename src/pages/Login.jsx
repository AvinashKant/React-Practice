import "../assets/css/login.css";
export default function Login() {
  return (
    <>
      <nav className="bg-red-100 p-6 text-center">
        <ul className="">
          <li className="inline-block">
            <a className="hover:bg-white p-6 black" href="">
              Home
            </a>
          </li>
          <li className="inline-block">
            <a className="hover:bg-white p-6 black" href="">
              About
            </a>
          </li>
          <li className="inline-block">
            <a className="hover:bg-white p-6 black" href="">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="min-w">
        <section className="sidebar">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, quos
          aspernatur? Officia repellat necessitatibus dolorem dignissimos itaque
          debitis ratione obcaecati, explicabo laboriosam alias eligendi odio
          eveniet at earum in exercitationem?
        </section>
        <section className="content">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint sit
          deleniti aliquid expedita aliquam magni laudantium sed qui nobis
          consectetur quis at, possimus vero sequi molestias odit fugiat dolor
          nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Doloremque, cumque porro. Quaerat natus exercitationem explicabo
          libero esse, nobis eaque aut perspiciatis expedita nam quasi quo ea,
          ex sunt, vitae facilis! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quia, possimus doloribus commodi, omnis optio
          aperiam quas, veritatis laborum facilis et repellat vero recusandae
          dignissimos rem autem. Excepturi minus hic illum. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Voluptatibus sit ducimus
          reiciendis libero quasi nostrum facere deleniti officia cumque fugiat
          tempore deserunt tempora, ab cum rerum fugit nobis corrupti! Saepe.
        </section>
        <section className="rightbar">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          nihil qui alias velit, consectetur delectus at natus impedit expedita
          autem magnam possimus sed officiis quas architecto odit quos quae.
          Inventore!
        </section>
      </div>
      <footer className="bg-red-800 text-center">
        <ul className="">
          <li className="inline-block p-6">
            <a className="hover:bg-white p-6 black" href="">
              Home
            </a>
          </li>
          <li className="inline-block p-6">
            <a className="hover:bg-white p-6 black" href="">
              About
            </a>
          </li>
          <li className="inline-block p-6">
            <a className="hover:bg-white p-6 black" href="">
              Contact
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}
