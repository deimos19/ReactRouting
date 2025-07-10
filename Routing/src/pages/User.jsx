import React from "react";
import { Link } from "react-router-dom";

const User = () => {
    const users = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    address: '123 Main St',
    phone: '+1 555-1234',
    city: 'New York',
    country: 'USA',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    address: '456 Maple Ave',
    phone: '+1 555-5678',
    city: 'Los Angeles',
    country: 'USA',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    email: 'alice@example.com',
    address: '789 Oak Blvd',
    phone: '+44 20 7946 1234',
    city: 'London',
    country: 'UK',
  },
  {
    id: 4,
    name: 'Bob Brown',
    email: 'bob@example.com',
    address: '321 Pine St',
    phone: '+61 2 9374 1234',
    city: 'Sydney',
    country: 'Australia',
  },
  {
    id: 5,
    name: 'Charlie Davis',
    email: 'charlie@example.com',
    address: '654 Cedar Ln',
    phone: '+91 98765 43210',
    city: 'Mumbai',
    country: 'India',
  },
  {
    id: 6,
    name: 'Diana Evans',
    email: 'diana@example.com',
    address: '987 Birch Rd',
    phone: '+33 1 23 45 67 89',
    city: 'Paris',
    country: 'France',
  },
  {
    id: 7,
    name: 'Frank Green',
    email: 'frank@example.com',
    address: '159 Elm St',
    phone: '+81 3-1234-5678',
    city: 'Tokyo',
    country: 'Japan',
  },
  {
    id: 8,
    name: 'Grace Hall',
    email: 'grace@example.com',
    address: '753 Willow Ave',
    phone: '+49 30 123456',
    city: 'Berlin',
    country: 'Germany',
  },
  {
    id: 9,
    name: 'Henry King',
    email: 'henry@example.com',
    address: '246 Spruce Dr',
    phone: '+39 06 12345678',
    city: 'Rome',
    country: 'Italy',
  },
  {
    id: 10,
    name: 'Isabella Lewis',
    email: 'isabella@example.com',
    address: '135 Redwood Way',
    phone: '+86 10 1234 5678',
    city: 'Beijing',
    country: 'China',
  },
];


  return (
    <div className="grid justify-center mx-auto py-3">
        {users.map((user,index) => (
        <div className="card card-border bg-base-300 w-96 mx-5 my-3">
                <div key={index}>
                    <div className="card-body">
                        <h2 className="card-title">{user.name}</h2>
                        <div className="card-actions justify-end">
                            <Link to={`/users/${user.id}`} className="btn btn-primary">Know More</Link>
                        </div>
                    </div>
                </div>

        </div>
        ))}
      </div>
  );
};

export default User;
