import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Container,
    Heading,
} from "@chakra-ui/react"
import { createFileRoute } from "@tanstack/react-router"


export const Route = createFileRoute("/")({
    component: Home,
})

function Home() {
    // Данные для таблицы
    const tableData = Array.from({ length: 10 }, (_, rowIndex) => ({
        column1: `Row ${rowIndex + 1} - Col 1`,
        column2: `Row ${rowIndex + 1} - Col 2`,
        column3: `Row ${rowIndex + 1} - Col 3`,
        column4: `Row ${rowIndex + 1} - Col 4`,
        column5: `Row ${rowIndex + 1} - Col 5`,
    }))

    return (
        <Container maxW="container.lg" py={10}>
            <Heading size="lg" mb={6} textAlign="center">
                Таблица из 5 столбцов и 10 строк
            </Heading>
            <TableContainer>
                <Table variant="striped" colorScheme="teal">
                    <Thead>
                        <Tr>
                            <Th>Столбец 1</Th>
                            <Th>Столбец 2</Th>
                            <Th>Столбец 3</Th>
                            <Th>Столбец 4</Th>
                            <Th>Столбец 5</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {tableData.map((row, index) => (
                            <Tr key={index}>
                                <Td>{row.column1}</Td>
                                <Td>{row.column2}</Td>
                                <Td>{row.column3}</Td>
                                <Td>{row.column4}</Td>
                                <Td>{row.column5}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </Container>
    )
}
