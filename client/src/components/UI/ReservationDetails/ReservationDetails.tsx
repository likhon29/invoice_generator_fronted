"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { Box, Button, Grid, Typography } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import CustomForm from "@/components/Forms/CustomForm";
import CustomInput from "@/components/Forms/CustomInput";
import CustomSelectField from "@/components/Forms/CustomSelectField";

type TParams = {
  params: {
    doctorId: string;
  };
};
const ReservationDetails = () => {
  const handleFormSubmit = async (values: FieldValues) => {
    try {
      console.log(values);
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <div className="">
      <h4 className="text-[18px] font-medium">Reservation Details</h4>
      <hr className="w-100 border-primary" />
      <div className="border border-secondary rounded-[5px]">
        <CustomForm onSubmit={handleFormSubmit}>
          <Grid container spacing={2} sx={{ my: 1 }}>
            <CustomInput
              name="name"
              label="Name"
              fullWidth={true}
              sx={{ mb: 1 }}
            />
            <Grid item xs={12} sm={12} md={12}></Grid>
          </Grid>
        </CustomForm>
      </div>
    </div>
  );
};

export default ReservationDetails;
