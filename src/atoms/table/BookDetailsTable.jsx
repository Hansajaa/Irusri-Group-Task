import { Table } from "flowbite-react"
import { useContext, useState } from "react"
import { detailsAboutBook } from "../../molecules/ProductCard"

const BookDetailsTable = () => {

    const details = useContext(detailsAboutBook);

    const [bookDetails, setBookDetails] = useState({
        title: details?.volumeInfo?.title || "No title",
        subtitled: details?.volumeInfo?.subtitle || "No subtitle",
        description: details?.volumeInfo?.description || "No description",
        publisher: details?.volumeInfo?.publisher || "No Publisher",
        publishedDate: details?.volumeInfo?.publishedDate || "No Published date"
    });

    return (
        <>
            <div className="overflow-x-auto">
                <Table hoverable>
                    <Table.Body className="divide-y">
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {'Title'}
                            </Table.Cell>
                            <Table.Cell>{bookDetails.title}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {'SubTitle'}
                            </Table.Cell>
                            <Table.Cell>{bookDetails.subtitled}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {'Description'}
                            </Table.Cell>
                            <Table.Cell>{bookDetails.description}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {'Publisher'}
                            </Table.Cell>
                            <Table.Cell>{bookDetails.publisher}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {'Published Date'}
                            </Table.Cell>
                            <Table.Cell>{bookDetails.publishedDate}</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        </>
    )
}

export default BookDetailsTable