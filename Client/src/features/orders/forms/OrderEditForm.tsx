import {
  DialogActionTrigger,
  DialogBackdrop,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTrigger,
  Input,
} from "@chakra-ui/react";
import { Order } from "../../../app/models/order";
import { Button } from "../../../components/ui/button";
import {
  DialogBody,
  DialogCloseTrigger,
  DialogTitle,
} from "../../../components/ui/dialog";

interface Props {
  orders: Order[];
}

export default function OrderEditForm({ orders }: Props) {
  return (
    <>
      <DialogRoot placement={"top"}>
        <DialogBackdrop />
        <DialogTrigger asChild>
          <Button colorPalette={"blue"} variant="solid">
            Edit
          </Button>
        </DialogTrigger>

        <DialogContent
          position="fixed"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          p={4}
        >
          <DialogHeader>
            <DialogTitle>Order details</DialogTitle>
          </DialogHeader>
          <DialogBody></DialogBody>
          <DialogFooter>
            <DialogActionTrigger asChild>
              <Button colorPalette="red">Cancel</Button>
            </DialogActionTrigger>
            <Button colorPalette="green">Save</Button>
          </DialogFooter>
          <DialogCloseTrigger />
        </DialogContent>
      </DialogRoot>
    </>
  );
}
