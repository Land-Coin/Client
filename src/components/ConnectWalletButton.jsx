import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";


const ConnectWalletButton = () => {

      //wagmi states
  const { isConnected } = useAccount();
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
    return (

        <Box>
  <Button
                  sx={{
                    bgcolor: "#fff",
                    borderRadius: "50px",
                    color: "#000",
                    "&:hover": { backgroundColor: "#fff" },
                    
                  }}
                >
                Connect your Wallet
                  
                </Button> 
                <ConnectButton label="Connect Wallet" />

                </Box>
               
                )}
                
    
            
    
    export default ConnectWalletButton;