import { Box, Container, Flex, Heading, IconButton, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation */}
      <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding={6} bg="teal.500" color="white">
        <IconButton icon={<FaGithub />} isRound="true" size="lg" aria-label="GitHub" as="a" href="https://github.com" />
        <IconButton icon={<FaLinkedin />} isRound="true" size="lg" aria-label="LinkedIn" as="a" href="https://linkedin.com" />
        <IconButton icon={<FaTwitter />} isRound="true" size="lg" aria-label="Twitter" as="a" href="https://twitter.com" />
      </Flex>

      {/* Hero Section */}
      <Flex align="center" justify="center" height="70vh" bg="gray.200">
        <VStack spacing={4}>
          <Heading as="h1" size="2xl" textAlign="center">
            Welcome to Our Website
          </Heading>
          <Text fontSize="xl">Building responsive and modern websites with React and Chakra UI.</Text>
          <Image src="https://images.unsplash.com/photo-1532372320572-cda25653a26d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ258ZW58MHx8fHwxNzE1NTQ1MjU0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Modern Web Design" boxSize="300px" objectFit="cover" />
        </VStack>
      </Flex>

      {/* Footer */}
      <Box bg="teal.600" color="white" p={4}>
        <Flex justify="center" align="center">
          <Text fontSize="sm">© 2023 Your Company. All rights reserved.</Text>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;
