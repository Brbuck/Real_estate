import React from "react";
import {
  Container,
  ClosedModalButton,
  Input,
  Modal,
  Textarea,
  ClosedButton,
} from "./styles";

import axios from "axios";
import { useForm } from "react-hook-form";
import { formatacelular } from "../../utils";

function SendEmail({ ShowContactModal, id }) {
  const { register, handleSubmit } = useForm();

  async function send({ email, message, name, phone }) {
    try {
      await axios
        .post("http://localhost:3000/api/sendemail", {
          email,
          message,
          name,
          phone,
        })
        .then((response) => {
          alert(response.data.msg);
        });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.msg);
      }
    }
  }
  return (
    <Container className="upload_overlay">
      <Modal className="form-message" onSubmit={handleSubmit(send)}>
        <ClosedButton onClick={ShowContactModal} />
        <h2>Send Message</h2>
        <Input type="text" {...register("name")} placeholder="Name" />
        <Input
          type="tel"
          {...register("phone")}
          onKeyUp={formatacelular}
          placeholder="Phone"
        />
        <Input type="email" {...register("email")} placeholder="E-mail" />
        <Textarea
          type="text"
          defaultValue={`Hello, I would like more information about this residence,  ${
            id?.address
          }, Price: ${id?.price.toLocaleString("pt-br", {
            style: "currency",
            currency: "USD",
          })}. I await your contact, thank you.`}
          {...register("message")}
          placeholder="Message"
        ></Textarea>
        <ClosedModalButton type="submit">Send</ClosedModalButton>
      </Modal>
    </Container>
  );
}

export default SendEmail;
