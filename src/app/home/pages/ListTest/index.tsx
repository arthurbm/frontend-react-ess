import {
  Box,
  Heading,
  Text,
  Spinner,
  Alert,
  AlertIcon,
  Button,
  VStack,
  Input,
  ButtonGroup,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import {
  useTestById,
  useUpdateTestByIdMutation,
  useDeleteTestMutation,
} from "../../hooks";
import { ArrowBackIcon } from "@chakra-ui/icons";

const ListTest = () => {
  const { id } = useParams() as { id: string };
  const { data: test, error, isLoading } = useTestById(id);
  const { mutate: updateTest } = useUpdateTestByIdMutation(id);
  const { mutate: deleteTest } = useDeleteTestMutation();

  const [name, setName] = useState(test?.data.name || "");

  const navigate = useNavigate();

  const handleUpdate = () => {
    if (!name) return;
    updateTest({ name });
  };

  const handleDelete = () => {
    deleteTest(id);
    navigate("/tests");
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      {isLoading && <Spinner />}
      {error && (
        <Alert status="error">
          <AlertIcon />
          Erro ao carregar test!
        </Alert>
      )}
      {test && (
        <VStack spacing={4}>
          <Box p="4" borderWidth="1px" borderRadius="md">
            {/* back button */}
            <Button
              variant={"link"}
              colorScheme="green"
              onClick={() => navigate("/tests")}
              leftIcon={<ArrowBackIcon />}
            >
              Back
            </Button>
            <Heading as="h2" size="lg" mb="4">
              {test.data.name}
            </Heading>
            <Text fontSize="md">ID: {test.data.id}</Text>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Test Name"
              mt="4"
            />
            <ButtonGroup>
              <Button colorScheme="blue" mt="4" onClick={handleUpdate}>
                Update
              </Button>
              <Button colorScheme="red" mt="4" onClick={handleDelete}>
                Delete
              </Button>
            </ButtonGroup>
          </Box>
        </VStack>
      )}
    </Box>
  );
};

export default ListTest;
