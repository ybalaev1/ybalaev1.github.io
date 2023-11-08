import React, { useEffect, useState } from 'react';
import { Divider } from 'primereact/divider';
import { getProjects } from './api/request';
import Card from './components/Card';
import Footer from './components/footer';

export type project = {
  description: string;
  name: string;
  images: string[];
  stack: string[];
  buttons: string[];
  position: string;
  borderColor: string;
  short_name: string;
}
const App = () => {
  const [data, setData] = useState<unknown | project[]>();
  useEffect(() => {
    getProjects().then((projects) => {
      setData(projects);
    });
  }, [])
  return (
    <>
    <div className="container-md body">
      <div className='d-flex'>
        <div className='head-message mb-5'>
          <Divider layout='vertical' className='d-xs-none'/>
          <div className='d-grid'>
            <p className='p-5 py-0 display-1 text-white lh-1 d-lg-flex d-md-flex d-xl-flex d-xxl-flex d-xs-none d-sm-none'><strong>Yanis Balaev</strong></p>
            <p className='p-5 py-0 h2 ms-2 text-white-50 lh-1'>React - Native Dev.</p>
          </div>
        </div>
      </div>
        {Array.isArray(data) && data.map((item: project) => {
          return (
            <div key={item.short_name} style={{float: item.position === 'left' ? 'left' : 'right'}}>
              <Card {...item} />
            </div>
          )
        })}
    </div>
    <Footer />
    </>
  );
}

export default App;
