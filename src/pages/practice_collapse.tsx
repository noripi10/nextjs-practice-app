import { memo, VFC, useState } from 'react'
import { Stack, VStack, HStack, Box, OrderedList, ListItem, Text, Collapse } from '@chakra-ui/react'
import { FaBolt, FaArrowUp, FaArrowDown } from 'react-icons/fa'

export default function Practice2() {
  return (
    <Stack flex={1} h='100vh'>
      <VStack
        flex={1}
        bgGradient='linear(to-b, #a4c9ee, #074757)'
        justifyContent='flex-start'
        alignItems='center'
        pt='16'
      >
        {[...Array(10).keys()].map((key) => (
          <Item key={`key-${key}`} id={key.toString()} />
        ))}
      </VStack>
    </Stack>
  )
}

type ItemProps = {
  id: string
}
const Item: VFC<ItemProps> = (props: ItemProps) => {
  const [isOpen, setOpen] = useState(false)
  return (
    <>
      <Box as='a' w='90%' m='0' flexDirection='column'>
        <Box
          bgColor='blue.600'
          color='white'
          m='0'
          pl='8'
          borderTopRadius='4'
          borderBottomRadius={isOpen ? '0' : '4'}
          _hover={{ cursor: 'pointer' }}
          onClick={() => setOpen((prev) => !prev)}
        >
          <HStack px='4' py='1'>
            <Text flexGrow={1}>Header Title {props.id}</Text>
            {isOpen ? <FaArrowUp /> : <FaArrowDown />}
          </HStack>
        </Box>
        <Collapse in={isOpen}>
          <Box bgColor='blue.300' p='8' m='0' borderBottomRadius='4'>
            <OrderedList>
              <ListItem textDecorationLine='underline'>
                <HStack>
                  <Text bgGradient='linear(to-r, #7928CA, #FF0090)'>Lorem ipsum dolor sit amet</Text>
                  <FaBolt color='#e4d619' />
                </HStack>
              </ListItem>
              <ListItem>Consectetur adipiscing elit</ListItem>
              <ListItem>Integer molestie lorem at massa</ListItem>
              <ListItem>Facilisis in pretium nisl aliquet</ListItem>
            </OrderedList>
          </Box>
        </Collapse>
      </Box>
    </>
  )
}
