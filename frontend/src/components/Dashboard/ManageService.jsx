import React, { useCallback, useEffect, useState } from 'react';
import { Button, Card, Image, Table } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { FaEdit, FaPlus } from 'react-icons/fa';
import { RiDeleteBinLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import ProductService from 'services/ProductService';
import ServiceTableSkeleton from 'skeletons/ServiceTableSkeleton';
import Swal from 'sweetalert2';
import { prettyPrintNumbers } from 'utils/utils';
import AddService from './AddService';

const ManageService = () => {
  const [serviceData, setServiceData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editServiceData, setEditServiceData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    ProductService.getServices()
      .then((data) => {
        setServiceData(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err);
        setIsLoading('error');
        setServiceData(null);
      });
  }, [serviceData, editServiceData]);

  const handleDelete = useCallback((id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#35996E',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        const loading = toast.loading('Deleting...Please wait!');
        ProductService.deleteService(id)
          .then((data) => {
            const newServiceData = serviceData?.filter(
              (service) => service?._id !== data._id
            );
            toast.dismiss(loading);
            setServiceData(newServiceData);
            Swal.fire({
              title: 'Service Deleted Successfully!',
              text: '',
              icon: 'success',
              confirmButtonText: 'OK',
              confirmButtonColor: '#5f031d',
            });
          })
          .catch((err) => {
            toast.dismiss(loading);
            Swal.fire('Something went wrong! Please try again.', '', 'error');
          });
      }
    });
  }, []);

  return editServiceData._id ? (
    <AddService
      editServiceData={editServiceData}
      setEditServiceData={setEditServiceData}
    />
  ) : (
    <Card>
      <Card.Header className="d-flex justify-content-between">
        <h5 className="mt-2">Service List</h5>
        <Link to="/dashboard/addService">
          <Button variant="outline-primary">
            <FaPlus /> Add Service
          </Button>
        </Link>
      </Card.Header>
      <Card.Body>
        <Table responsive>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {isLoading && <ServiceTableSkeleton />}
            {!isLoading && (
              <>
                {serviceData?.map((service) => (
                  <tr key={service._id}>
                    <td>
                      <Image src={service.image} style={{ height: 50 }} />
                    </td>
                    <td>{service.name}</td>
                    <td>Tk. {prettyPrintNumbers(service.price)}</td>
                    <td>{service.category.name}</td>
                    <td>
                      <Button
                        variant="outline-primary"
                        onClick={() => setEditServiceData(service)}
                      >
                        <FaEdit />
                      </Button>
                      <Button
                        onClick={() => {
                          handleDelete(service._id);
                        }}
                        className="delete__btn"
                        variant="outline-primary"
                      >
                        <RiDeleteBinLine />
                      </Button>
                    </td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default ManageService;
