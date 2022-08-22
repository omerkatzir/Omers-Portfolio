import React from 'react'
import GridLayout from "react-grid-layout";
import Layout from '../components/Layout';

const MyFirstGrid = () => {
  const layout = [
    // { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
    { i: "a", x: 0, y: 0, w: 1, h: 2, },
    { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: "c", x: 4, y: 0, w: 3, h: 2 }
  ];
  return (
    <Layout>
      <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={30}
        width={1200}
        allowOverlap={true}
      >
        <div key="a" className="DraggableDiv">a</div>
        <div key="b" className="DraggableDiv">b</div>
        <div key="c" className="DraggableDiv">c</div>
      </GridLayout>
    </Layout>

  );
}

export default MyFirstGrid;