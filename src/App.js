import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, Button, Table } from "react-bootstrap";

function App() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Check-In/Check-Out</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Filter</Nav.Link>
              <Button variant="outline-dark" className="rounded-5">
                New Employee
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="py-5 ">
        <h4 className="my-3">Employees</h4>
        <Table
          className="text-secondary text-nowrap"
          hover
          size="sm"
          responsive="md"
          style={{
            fontSize: "12px",
          }}
        >
          <thead className="text-uppercase">
            <tr>
              <th></th>
              <th className="p-2 px-3">first name</th>
              <th className="p-2 px-3">last name</th>
              <th className=" p-2 px-3">location</th>
              <th className=" p-2 px-3">last check-in</th>
              <th className="  p-2 px-3">last check-out</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border">
              <td className="fw-semibold p-3 border text-capitalize ">
                check-out
              </td>
              <td className="p-3 ">Zebedee</td>
              <td className="p-3 ">Schaffel</td>
              <td className="p-3 ">@Brookyln</td>
              <td className="p-3 ">Thu Mar 03 2022 12:00:00 GMT+</td>
              <td className="p-3 ">Wed Mar 02 2022 19:00:00 GMT+</td>
            </tr>
            <tr className="border">
              <td className="text-body fw-semibold p-3 border text-capitalize">
                check-in
              </td>
              <td className="p-3 ">Zebedee</td>
              <td className="p-3 ">Schaffel</td>
              <td className="p-3 ">@Brookyln</td>
              <td className="p-3 ">Thu Mar 03 2022 12:00:00 GMT+</td>
              <td className="p-3 ">Wed Mar 02 2022 19:00:00 GMT+</td>
            </tr>
            <tr className="border">
              <td className="fw-semibold p-3 border text-capitalize">
                check-out
              </td>
              <td className="p-3 ">Zebedee</td>
              <td className="p-3">Schaffel</td>
              <td className="p-3">@Brookyln</td>
              <td className="p-3 ">Thu Mar 03 2022 12:00:00 GMT+</td>
              <td className="p-3">Wed Mar 02 2022 19:00:00 GMT+</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default App;
