import React from 'react';
import { Form, FormGroup, FormControl, FormLabel, Button } from 'react-bootstrap'
import { Formik } from 'formik';
import * as yup from 'yup';
import Select from 'react-select'

const schema = yup.object().shape({
    name: yup.string().max(50, "The number of characters has been exceeded.").required("Name is required."),
    description: yup.string().max(200, "The number of characters has been exceeded.").required("Description is required."),
    price: yup.number("Price must be a number.").typeError("Price must be a number.").min(1, "Price have to be bigger than 1.").required("Price is required."),
    size: yup.string().required("Select a size."),
    image: yup.string().required("Image is required.")
})

class ItemForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        //    item: this.props.item ? this.props.item : {}
        }
    }

    // componentDidMount() {
    //     let state = { ...this.state };

    //     if (this.props.item) {
    //         state.item.size = { value: state.item.size, label: state.item.size}
    //         this.setState(state)
    //     }
    // }
    

    render() {
        return (
            <div>
                <Formik
                    initialValues={this.props.item ? this.props.item : 
                        { name: '', description: '', price: '', size: '', image: null }}
                    validationSchema={schema}
                    onSubmit={(values, { setSubmitting }) => {
                        var formData = new FormData()
                        formData.append("name", values.name);
                        formData.append("description", values.description);
                        formData.append("price", values.price);
                        formData.append("size", values.size.label);
                        formData.append("image", values.image);
                        this.props.onSubmit(formData)
                        this.props.done()
                    }}
                >
                    {({ isSubmitting, values, touched, errors, handleChange, handleBlur, handleSubmit, setFieldValue, setFieldTouched }) => (

                        <Form noValidate onSubmit={handleSubmit}>
                            <FormGroup controlId="name" validationState={errors.name && touched.name ? "error" : null}>
                                <FormLabel>Name</FormLabel>
                                <FormControl
                                    value={values.name}
                                    type="text" name="name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isInvalid={!!errors.name} />
                                <FormControl.Feedback type="invalid">
                                    {errors.name}
                                </FormControl.Feedback>
                            </FormGroup>
                            <FormGroup controlId="description" validationState={errors.description && touched.descripcion ? "error" : null}>
                                <FormLabel>Description</FormLabel>
                                <FormControl
                                    value={values.description}
                                    type="textarea" rows="2"
                                    name="description"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isInvalid={!!errors.description} />
                                <FormControl.Feedback type="invalid">
                                    {errors.description}
                                </FormControl.Feedback>

                            </FormGroup>
                            <FormGroup controlId="price" validationState={errors.price && touched.price ? "error" : null}>
                                <FormLabel>Price</FormLabel>
                                <FormControl
                                    value={values.price}
                                    type="text"
                                    name="price"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isInvalid={!!errors.price} />
                                <FormControl.Feedback type="invalid">
                                    {errors.price}
                                </FormControl.Feedback>
                            </FormGroup>
                            <FormGroup controlId="size" validationState={errors.size ? "error" : null}>
                                <FormLabel>Size</FormLabel>
                                <Select
                                    options={[{ value: 0, label: 'S' }, { value: 1, label: 'M' }, { value: 2, label: 'L' }]}
                                    onChange={(val) => { setFieldValue('size', val) }}
                                    onBlur={() => setFieldTouched('size', true)}
                                    name="size"
                                    value={values.size}
                                    placeholder="Select size..."
                                />
                                <FormControl.Feedback>
                                    {errors.size ? errors.size : ""}
                                </FormControl.Feedback>
                            </FormGroup>
                            <FormGroup>
                                <FormLabel>Image</FormLabel>
                                <FormControl 
                                    name="image" 
                                    type="file" 
                                    multiple 
                                    onChange={(e) => {
                                        setFieldValue("image", e.currentTarget.files[0])
                                    }} />
                            </FormGroup>

                            <div className="text-right">
                                <Button variant="danger" fill onClick={() => this.props.done()}>
                                    Cancel
                                </Button>
                                &nbsp; &nbsp;
                                <Button fill variant="primary" type="submit" >
                                    Save
                                </Button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        )
    }
}

export default ItemForm;