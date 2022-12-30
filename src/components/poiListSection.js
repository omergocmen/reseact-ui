import React from "react";
import { Box, Heading, List, ListItem, Select, Text } from "@chakra-ui/react";
import { FaBuilding } from "react-icons/fa";

export default function PoiListSection() {
  return (
    <Box
      id="poi-section"
      w="30%"
      maxH="250px"
      minH="240px"
      overflowY="auto"
      bg="HighlightText"
      h="full"
      shadow="dark-lg"
      rounded="lg"
    >
      <Heading size="md" m="5px" textAlign="center">
        En Çok Ziyaret Edilenler
      </Heading>
      <Box px="15px">
        <Select placeholder="Kategori Seçiniz">
          <option value="option1">Müze</option>
          <option value="option2">Sinema</option>
          <option value="option3">Restoran</option>
        </Select>
      </Box>
      <Box px="15px" py="5px" overflowY="visible">
        <List>
          <ListItem
            shadow="dark-lg"
            display="flex"
            rounded="lg"
            p="5px"
            my="3px"
          >
            <FaBuilding fontSize="20px" />
            <Text mx="10px">Lorem ipsum dolor sit amet</Text>
          </ListItem>
          <ListItem
            shadow="dark-lg"
            display="flex"
            rounded="lg"
            p="5px"
            my="3px"
          >
            <FaBuilding fontSize="20px" />
            <Text mx="10px">Lorem ipsum dolor sit amet</Text>
          </ListItem>
          <ListItem
            shadow="dark-lg"
            display="flex"
            rounded="lg"
            p="5px"
            my="3px"
          >
            <FaBuilding fontSize="20px" />
            <Text mx="10px">Lorem ipsum dolor sit amet</Text>
          </ListItem>
          <ListItem
            shadow="dark-lg"
            display="flex"
            rounded="lg"
            p="5px"
            my="3px"
          >
            <FaBuilding fontSize="20px" />
            <Text mx="10px">Lorem ipsum dolor sit amet</Text>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
