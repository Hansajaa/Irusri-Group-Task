import { Modal } from "flowbite-react";
import { Button } from "flowbite-react";
import BookDetailsTable from "../table/BookDetailsTable";

const BookDetailsModal = ({handleModal, modalOpen}) => {

    return (
        <>
            <Modal dismissible show={modalOpen} onClose={handleModal}>
                <Modal.Header>Details Of the book</Modal.Header>
                <Modal.Body>
                    <BookDetailsTable></BookDetailsTable>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default BookDetailsModal