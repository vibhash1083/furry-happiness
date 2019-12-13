<Card>
<CardHeader color="primary">
  <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
  <p className={classes.cardCategoryWhite}>Complete your profile</p>
</CardHeader>
<CardBody>
  <GridContainer>
    <GridItem xs={12} sm={12} md={5}>
      <CustomInput
        labelText="Company (disabled)"
        id="company-disabled"
        formControlProps={{
          fullWidth: true
        }}
        inputProps={{
          disabled: true
        }}
      />
    </GridItem>
    <GridItem xs={12} sm={12} md={3}>
      <CustomInput
        labelText="Username"
        id="username"
        formControlProps={{
          fullWidth: true
        }}
      />
    </GridItem>
    <GridItem xs={12} sm={12} md={4}>
      <CustomInput
        labelText="Email address"
        id="email-address"
        formControlProps={{
          fullWidth: true
        }}
      />
    </GridItem>
  </GridContainer>
  <GridContainer>
    <GridItem xs={12} sm={12} md={6}>
      <CustomInput
        labelText="First Name"
        id="first-name"
        formControlProps={{
          fullWidth: true
        }}
      />
    </GridItem>
    <GridItem xs={12} sm={12} md={6}>
      <CustomInput
        labelText="Last Name"
        id="last-name"
        formControlProps={{
          fullWidth: true
        }}
      />
    </GridItem>
  </GridContainer>
  <GridContainer>
    <GridItem xs={12} sm={12} md={4}>
      <CustomInput
        labelText="City"
        id="city"
        formControlProps={{
          fullWidth: true
        }}
      />
    </GridItem>
    <GridItem xs={12} sm={12} md={4}>
      <CustomInput
        labelText="Country"
        id="country"
        formControlProps={{
          fullWidth: true
        }}
      />
    </GridItem>
    <GridItem xs={12} sm={12} md={4}>
      <CustomInput
        labelText="Postal Code"
        id="postal-code"
        formControlProps={{
          fullWidth: true
        }}
      />
    </GridItem>
  </GridContainer>
  <GridContainer>
    <GridItem xs={12} sm={12} md={12}>
      <InputLabel style={{ color: "#AAAAAA" }}>About me</InputLabel>
      <CustomInput
        labelText="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
        id="about-me"
        formControlProps={{
          fullWidth: true
        }}
        inputProps={{
          multiline: true,
          rows: 5
        }}
      />
    </GridItem>
  </GridContainer>
</CardBody>
<CardFooter>
  <Button color="primary">Update Profile</Button>
</CardFooter>
</Card>
