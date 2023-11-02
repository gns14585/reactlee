import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";

function App() {
  return (
    <>
      <SimpleGrid gap={3} columns={{ base: 1, md: 3, xl: 6 }}>
        {/* Card*30>CardHeader>Heading[size="md"]>lorem2^^CardBody>lorem15 */}
        {/* Card*30>CardHeader>Heading[size="md"]>lorem2^^CardBody>lorem15^CardFooter>Button>lorem1 */}
        <Card>
          <CardHeader>
            <Heading size="md">Lorem ipsum.</Heading>
          </CardHeader>
          <CardBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium, dolor facilis reiciendis similique tempore veniam.
          </CardBody>
          <CardFooter>
            <Button>Lorem.</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Aut, enim?</Heading>
          </CardHeader>
          <CardBody>
            At, fuga optio possimus repellendus vel veritatis! Asperiores
            ducimus iure laboriosam odio perspiciatis temporibus veritatis?
          </CardBody>
          <CardFooter>
            <Button>Dolorem.</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Dignissimos, voluptatum?</Heading>
          </CardHeader>
          <CardBody>
            Accusantium impedit labore temporibus veritatis! Asperiores laborum
            neque numquam, placeat quis soluta tenetur vitae? Perferendis!
          </CardBody>
          <CardFooter>
            <Button>Libero.</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Perspiciatis, quam.</Heading>
          </CardHeader>
          <CardBody>
            Animi, autem cupiditate deserunt excepturi explicabo fugiat id
            impedit maiores pariatur provident, quam suscipit voluptates!
          </CardBody>
          <CardFooter>
            <Button>Non!</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Facere, nam!</Heading>
          </CardHeader>
          <CardBody>
            Aliquam consequuntur, incidunt iusto laborum numquam odio reiciendis
            voluptatum. Excepturi id maiores necessitatibus quo sapiente?
          </CardBody>
          <CardFooter>
            <Button>Odit?</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Deleniti, maiores.</Heading>
          </CardHeader>
          <CardBody>
            Asperiores cupiditate eaque exercitationem quo saepe! Animi beatae
            consequuntur explicabo id maxime nulla, quos vero.
          </CardBody>
          <CardFooter>
            <Button>Sapiente!</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Tenetur, voluptatibus.</Heading>
          </CardHeader>
          <CardBody>
            Aspernatur beatae corporis dolorem expedita maxime nesciunt sunt
            tempora! Dicta error eveniet fugit laborum voluptates.
          </CardBody>
          <CardFooter>
            <Button>Repellat?</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Modi, nostrum.</Heading>
          </CardHeader>
          <CardBody>
            Aperiam commodi recusandae reprehenderit! Alias at deleniti dolorem
            ea, illo nemo nihil quae rerum vero.
          </CardBody>
          <CardFooter>
            <Button>Nobis.</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Aliquid, quisquam.</Heading>
          </CardHeader>
          <CardBody>
            Alias assumenda atque blanditiis dolorem dolorum inventore magni
            modi nesciunt nobis optio quia quod, totam.
          </CardBody>
          <CardFooter>
            <Button>Neque.</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Deserunt, quae?</Heading>
          </CardHeader>
          <CardBody>
            At ea, fugiat maxime optio quas veniam veritatis? At ducimus
            laudantium nemo nisi provident quod.
          </CardBody>
          <CardFooter>
            <Button>Tenetur.</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Sed, suscipit.</Heading>
          </CardHeader>
          <CardBody>
            Accusantium architecto assumenda commodi earum enim eum eveniet ex
            harum necessitatibus, non officia possimus reiciendis.
          </CardBody>
          <CardFooter>
            <Button>Dolor.</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Possimus, quo.</Heading>
          </CardHeader>
          <CardBody>
            Aperiam consectetur cumque enim esse facere fugiat illo ipsam iusto
            nam provident vel, velit. Perferendis?
          </CardBody>
          <CardFooter>
            <Button>Accusamus!</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Dolores, unde!</Heading>
          </CardHeader>
          <CardBody>
            Distinctio dolores pariatur quae quo ullam? Adipisci aliquam aut
            consectetur explicabo iure nihil optio suscipit?
          </CardBody>
          <CardFooter>
            <Button>Doloribus.</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Iure, suscipit?</Heading>
          </CardHeader>
          <CardBody>
            Aliquid blanditiis error et explicabo fuga minima odit officiis,
            optio sed? Enim magni non officiis!
          </CardBody>
          <CardFooter>
            <Button>Veniam.</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Aliquid, laudantium?</Heading>
          </CardHeader>
          <CardBody>
            Deleniti distinctio ducimus fugiat iure neque, nostrum quod
            temporibus! Enim et eveniet omnis porro. Perspiciatis?
          </CardBody>
          <CardFooter>
            <Button>Quidem!</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Consequuntur, magni!</Heading>
          </CardHeader>
          <CardBody>
            Amet dicta eaque, maiores pariatur perferendis praesentium suscipit!
            Autem expedita fugiat nostrum officiis porro unde!
          </CardBody>
          <CardFooter>
            <Button>Iste?</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Ducimus, laudantium.</Heading>
          </CardHeader>
          <CardBody>
            Accusantium aliquid architecto, commodi, delectus facere hic neque
            nihil praesentium qui quisquam quod reprehenderit, voluptatibus.
          </CardBody>
          <CardFooter>
            <Button>Ipsam.</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Fugit, perspiciatis!</Heading>
          </CardHeader>
          <CardBody>
            Animi aspernatur, eligendi expedita inventore ipsum laudantium,
            maiores nobis officiis repellat, unde ut vero! Fuga.
          </CardBody>
          <CardFooter>
            <Button>Earum?</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Cupiditate, odio.</Heading>
          </CardHeader>
          <CardBody>
            Autem dolorem dolorum error mollitia, nobis tempore unde. Blanditiis
            cupiditate eius officiis perferendis quos velit!
          </CardBody>
          <CardFooter>
            <Button>Est.</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Assumenda, minima?</Heading>
          </CardHeader>
          <CardBody>
            Accusantium consequatur dignissimos dolore doloremque, iure maiores,
            modi mollitia odio perspiciatis quae quas unde, veniam!
          </CardBody>
          <CardFooter>
            <Button>Odio.</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Cumque, molestiae!</Heading>
          </CardHeader>
          <CardBody>
            Accusantium architecto, commodi dignissimos ipsa ipsum iste itaque
            laborum magnam nam neque optio, repellendus veritatis!
          </CardBody>
          <CardFooter>
            <Button>Quibusdam!</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Inventore, voluptatibus!</Heading>
          </CardHeader>
          <CardBody>
            Amet dicta distinctio doloremque eos fugiat, ipsum nemo nesciunt
            non, optio ratione tempora totam ullam.
          </CardBody>
          <CardFooter>
            <Button>Neque.</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Beatae, sequi!</Heading>
          </CardHeader>
          <CardBody>
            Eligendi eos id, illo impedit laudantium magnam neque officia
            pariatur quam ratione reiciendis saepe sit.
          </CardBody>
          <CardFooter>
            <Button>Expedita?</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Deleniti, repudiandae!</Heading>
          </CardHeader>
          <CardBody>
            Error iure magnam rem temporibus vitae. Accusamus accusantium atque
            dolores molestiae mollitia nobis sequi velit.
          </CardBody>
          <CardFooter>
            <Button>Autem?</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Necessitatibus, odio.</Heading>
          </CardHeader>
          <CardBody>
            Assumenda earum itaque maxime nulla numquam pariatur perferendis?
            Cupiditate hic illo in necessitatibus reiciendis vero!
          </CardBody>
          <CardFooter>
            <Button>Nobis.</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Aperiam, deleniti?</Heading>
          </CardHeader>
          <CardBody>
            Accusamus doloribus id ipsa iusto maiores omnis, pariatur possimus
            quaerat quia quibusdam quod ullam unde.
          </CardBody>
          <CardFooter>
            <Button>Recusandae?</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Consectetur, id.</Heading>
          </CardHeader>
          <CardBody>
            Accusamus aut consectetur delectus dolorum eveniet expedita fugit
            ipsam ipsum iusto nemo, pariatur placeat sunt!
          </CardBody>
          <CardFooter>
            <Button>Quod.</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Fugit, suscipit.</Heading>
          </CardHeader>
          <CardBody>
            Ad atque deserunt ipsa nemo provident quidem recusandae tenetur
            ullam. Beatae cumque exercitationem non vero.
          </CardBody>
          <CardFooter>
            <Button>Magni!</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Quo, rem.</Heading>
          </CardHeader>
          <CardBody>
            Deleniti dignissimos dolorum eaque eveniet, exercitationem magnam
            nisi quod, repudiandae sit ullam unde voluptate voluptates.
          </CardBody>
          <CardFooter>
            <Button>Aperiam!</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md">Enim, facere!</Heading>
          </CardHeader>
          <CardBody>
            Accusamus aliquid aperiam assumenda consectetur corporis, culpa
            dolore est minima necessitatibus, nobis, numquam officiis
            praesentium?
          </CardBody>
          <CardFooter>
            <Button>Et.</Button>
          </CardFooter>
        </Card>
      </SimpleGrid>
    </>
  );
}

export default App;
