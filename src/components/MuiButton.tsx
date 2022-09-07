import { Stack, Button, IconButton, ButtonGroup } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export const MuiButton = () => {
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        {/*yani inch vor flexi nman ban arav, childerin directiony row dasavorec heravorityunne iranc 2 */}
        <Button variant="text" href="https://google.com">
          text
        </Button>
        {/*prosty text, aranc bg & border */} {/*iranc karanq href tanq */}
        <Button variant="contained">contained</Button>
        {/*bg ov ushadrutyun gravox knopka karevir */}
        <Button variant="outlined">outlined</Button>
        {/*borderov knopka aranc bg */}
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          {/*guynery nayum enq dakumentaciayi costumization, pallete-ic,  */}
          Primary
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="contained" color="info">
          info
        </Button>
        <Button variant="contained" color="error">
          error
        </Button>
        <Button variant="contained" color="secondary">
          secondary
        </Button>
        <Button variant="contained" color="warning">
          warning
        </Button>
      </Stack>

      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">
          small
        </Button>
        {/*chapser enq tali */}
        <Button variant="contained" size="medium">
          medium
        </Button>
        <Button variant="contained" size="large">
          large
        </Button>
      </Stack>

      <Stack spacing={2} direction="row">
        {/*iconnern enq ogtagorcum,  */}
        {/*iconan gtel em  doc-i components, material icons-ic */}
        <Button variant="contained" startIcon={<SendIcon />} disableRipple>
          {/*disableRipple-ov onClicki animaciana hanum */}
          start
        </Button>
        {/*startIcon aysinqn textic araj */}
        <Button variant="contained" endIcon={<SendIcon />} disableElevation>
          {/*disableElevationov shadowy hanuma, */}
          end
        </Button>
        {/*endIcon aysinqn textic heto */}

        <IconButton aria-label="send" color="success" size="small">
          {/*aria-label='send' ov yani disable-i tesqa yndunum */}
          <SendIcon />
        </IconButton>
      </Stack>
      <Stack direction="row">
        <ButtonGroup variant="contained" orientation="vertical" aria-label='alignment button group'>
          {/*ete uzum enq vor mi qani knopka irar kpac exni sirun, senc enq anum*/}
          {/*orientatinov asum enq vor knopkeqy irar tak exnen */}
          {/*karanq tanq sovorakan buttoni bolor stylery ste vor verabervi saxin, baci onCLickic */}
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  );
};
