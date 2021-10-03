import React from "react";

const ClientSection = () => {
  const clients = [
    { name: "seindo", img: "seindo.png" },
    { name: "flowently", img: "flowently.png" },
    { name: "cangkangsawit", img: "cangkangsawit.png" },
    { name: "aesia", img: "aesia.png" },
  ];

  const render_clients_logo = clients.map((item, idx) => (
    <div key={`client-${idx}-logo`} className="col-md-3 text-center">
      <img
        className="client-logo"
        height={40}
        alt={item.name}
        src={`/assets/images/${item.img}`}
      />
    </div>
  ));

  return (
    <div className='my-75'>
      <h3 className="title text-center mb-0">
        I'm proud to have collaborated
      </h3>
      <h3 className="title text-center">
        with <span className='text-gradient-1'>some awesome companies :</span>
      </h3>
      <div className="text-center">
        <div className="row mt-5 mx-auto">{render_clients_logo}</div>
      </div>
    </div>
  );
};

export default ClientSection;
