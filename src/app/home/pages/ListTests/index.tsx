import {
  Box,
  Heading,
  Text,
  Link as ChakraLink,
  VStack,
  Spinner,
  Alert,
  AlertIcon,
  Button,
  HStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useTests, useDeleteTestMutation } from "../../hooks";

const ListTests = () => {
  const { data: tests, error, isLoading } = useTests();
  const { mutate: deleteTest } = useDeleteTestMutation();

  const handleDelete = (id: string) => {
    deleteTest(id);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Heading as="h1" size="2xl" mb="4">
        List Tests
      </Heading>
      <VStack spacing={4} align="stretch">
        {isLoading && <Spinner />}
        {error && (
          <Alert status="error">
            <AlertIcon />
            Erro ao carregar tests!
          </Alert>
        )}
        {tests?.data.map((test) => (
          <Box
            key={test.id}
            p="2"
            borderWidth="1px"
            borderRadius="md"
            width="100%"
          >
            <HStack justify="space-between">
              <ChakraLink as={Link} to={`/test/${test.id}`}>
                <Text fontSize="xl" data-cy={`test-item-${test.name}`}>
                  {test.name}
                </Text>
              </ChakraLink>
              <Button colorScheme="red" onClick={() => handleDelete(test.id)}>
                Delete
              </Button>
            </HStack>
          </Box>
        ))}
      </VStack>
      <br />
      <ChakraLink as={Link} to="/create-test" replace color="teal.500">
        CRIAR TEST
      </ChakraLink>
    </Box>
  );
};

export default ListTests;
