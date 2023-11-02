import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>모달 열기</Button>

      {/* closeOnOverlayClick={false} : 모달창이 떴을때 닫기나 x버튼만 눌러야 모달창 꺼짐 */}
      <Modal
        closeOnOverlayClick={true}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset="slideInBottom"
      >
        {/* ModalOverlay : 모달이 뜨면 뒤가 좀 어둡게 됨 */}
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>모달의 제목</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut facere
            fuga illo nisi possimus saepe sapiente, temporibus tenetur. Beatae
            cupiditate fugit magnam pariatur quod rem rerum, unde voluptatum!
            Dolores, ut.
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={onClose}>
              닫기
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default App;
