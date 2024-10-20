import React, { useEffect, useState } from "react";
import Text from "./Text";
import Grid from "@mui/material/Grid";
import { Stack ,Box} from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Floors = ({ floorPosition = "",res ,variant,item,handleClick,isUnitPlanAdded}) => {
    const theme = useTheme();
    return (
      <Stack
      onClick={
        variant !== "residential" && 
        variant !== "commercial" && 
        variant !== "parking"
          ? () => handleClick({ floorDetail: item })
          : null
      }
          display="flex"
          justifyContent="center"
          alignItems="center"
          id="MAINSTACKKKK"
          sx={{
             minWidth: variant === "parking" ? "100%" : "91px",
              height: variant === "parking" ? "60px" : "80px",
              // borderRadius: "8px",
            backgroundColor:
              variant === "parking"
              ? theme.palette.yellow.main
              : item?.status === "HOLD"
              ? "#FFF"
              : item?.status === "BOOKED"
              ? theme.palette.primary.main
              : (isUnitPlanAdded || item?.status === "AVAILABLE")
              ? "#ccfba8"
              : theme.palette.primary.contrast,
          borderBottomStyle: variant === "parking" ? "none" : "solid",
          borderBottomWidth: "4px",
          borderBottomColor: theme.palette.primary.light,
          borderRadius: variant === "parking" ? "0px 20px 20px 0px" : "0px",
          marginTop: variant === "parking" ? "10px" : "0px",
          border: item?.status === "HOLD" ? "2px solid #25A9E0" : null,
          // ...roomType[variant]
        }}
      >
        <Text variant="subtitle1">
          {variant === "parking" ? `${floorPosition}-Parking` : floorPosition}
        </Text>
      </Stack>
    );
};

const Cell = ({ variant: initialVariant = "", flatLabel = "", flatStatus = "", isUnitPlanAdded = false,includedParking=false }) => {
    const [variant, setVariant] = useState(initialVariant);
    useEffect(() => {
        if (flatStatus === "BOOKED" && includedParking) {
            setVariant("includesParking");
        } else if (flatStatus === "BOOKED") {
            setVariant("booked");
        } else {
            setVariant(initialVariant);
        }
    }, [flatStatus, initialVariant, includedParking]);

    const theme = useTheme();

    const textStyle = {
        booked: {
            color: "#FFFFFF",
        },
        parking: {
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.primary.main,
        },
        residential: {
            color: theme.palette.primary.main,
        },
        hold: {
            color: theme.palette.primary.main,
        },
        commercial: {
            color: theme.palette.primary.main,
        },
        includesparking:{
            color: "#FFFFFF",
        }
    };
    const cellStyle = {
        booking: {
            backgroundColor: theme.palette.primary.main,
            borderLeftStyle: "solid",
            borderLeftWidth: "8px",
            borderLeftColor: theme.palette.primary.light,
        },
        parking: {
            backgroundColor: theme.palette.primary.main,
            borderLeftStyle: "solid",
            borderLeftWidth: "8px",
            borderLeftColor: theme.palette.primary.main,
        },
        booked: {
            backgroundColor: theme.palette.primary.main,
        },
        residential: {
            backgroundColor: theme.palette.secondary.main,
            border: "1px solid #CBCBCB",
        },
        hold: {
            backgroundColor: theme.palette.primary.main,
            border: "2px solid #25A9E0",
        },
        commercial: {
            backgroundColor: "#FFD684",
            border: "1px solid #CBCBCB",
        },
        includesParking: {
            backgroundImage: `linear-gradient(to right, ${theme.palette.primary.main} 80%, ${theme.palette.primary.light} 20%)`,
            borderLeftStyle: "solid",
            borderLeftWidth: "8px",
           
        },
        builderFloors:{
            backgroundColor: "#ccfba8",
        },
        builderFloor:{
            backgroundColor: theme.palette.primary.contrast,
        },
    };
    
    const unitPlansVariant = {
        residential:{
            backgroundColor: "#C3DCE3",
            border: "1px solid #CBCBCB",
        },
        commercial:{
            backgroundColor:"#D8B16A",
            border: "1px solid #CBCBCB",
        },
        plotted:{
            backgroundColor: "#C3DCE3",
            border: "1px solid #CBCBCB",
        },
    } 
    
    const roomType = {
        commercial: cellStyle.commercial,
        HOLD: cellStyle.hold,
        residential: cellStyle.residential,
        booked: cellStyle.booked,
        parking: cellStyle.parking,
        includesParking: cellStyle.includesParking,
        builderFloors:cellStyle.builderFloors,
        builderFloor:cellStyle.builderFloor,
    };

    return (  
        <Stack
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
                width: "76px",
                height: "48px", 
                borderRadius: "8px",
                margin: "16px 8px",
                cursor:"pointer",
                ...roomType[variant],
                ...(!isUnitPlanAdded ? roomType[variant] : unitPlansVariant[variant]),
                border: flatStatus === "HOLD" || variant === "hold" ?"2px solid #25A9E0" : "1px solid #CBCBCB",
            }}
                    >
            <Text
                variant="subtitle1"
                sx={{ color: theme.palette.primary.main, ...textStyle[variant?.toLowerCase()] }}
            >
                {flatLabel}
            </Text>
        </Stack>
    
    );
};

const FloorTable = ({ res,handleClick,isResidentialOrCommericial = true,variant="normal" }) => {
    const plotsPerRow = 5;
    // Group the plottedLand array into rows
    const rows = [];
    for (let i = 0; i < res?.length; i += plotsPerRow) {
      const row = res.slice(i, i + plotsPerRow);
      rows.push(row);
    }



    if(isResidentialOrCommericial){
        return (
            <div style={{marginBottom:'1.5rem',cursor: 'pointer'}}>
            {res?.length && res?.map((item, i) => {
                return (
                    <Grid display="flex" flexDirection="row" alignItems="center">
                        {item?.floor_number != null && (item?.floor_number >=0 && (
                            <Floors  item={item} floorPosition={item?.floor_number} variant={item?.variant} isUnitPlanAdded={item?.existingObjectId} handleClick={handleClick} res={res}/>
            ))}
                        <Grid
                            display="flex"
                            flexDirection="row"
                            justifyContent="center"
                            alignItems={"center"}
                            sx={{
                                borderBottomStyle: "solid",
                                borderBottomWidth: "1px",
                                borderBottomColor: "#EAECF0",

                                borderTopStyle: "solid",
                                borderTopWidth: "1px",
                                borderTopColor: "#EAECF0",
                            }}
                        >
                            {item?.flats?.length ? (
                                item?.flats.map((data, idx) => {
                                    // data?.flat_number,data?.status, data?.flat_position, data?.flat_id
                                    return (
                                      <div
                                        onClick={() =>
                                          handleClick({
                                            floorDetail: item,
                                            flatDetail: data,
                                          })
                                        }
                                        style={{
                                          display: "flex",
                                          alignItems: "center",
                                        }}
                                      >
                                        <Cell
                                          variant={item?.variant}
                                          flatLabel={
                                            data?.flat_number ||
                                            data?.shop_number
                                          }
                                          flatStatus={data?.status}
                                          isUnitPlanAdded={
                                            data?.existingObjectId ||
                                            data?.flat_id ||
                                            data?.shop_id
                                          }
                                          includedParking={
                                            data?.included_parking
                                          }
                                        />
                                        <Text
                                          variant="typo14"
                                          sx={{ color: "#101828" }}
                                        >
                                          {data.text}
                                        </Text>
                                      </div>
                                    );
                                })
                            ) : (null)}

                        </Grid>
                    </Grid>
                );
            })}
        </div>
        )
    }

    return (
        <div style={{ marginBottom: "1.5rem" }}>
          {rows?.length &&
            rows?.map((item, i) => {
              return (
                <Grid
                  key={i}
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                >
                  <Grid
                    display="flex"
                    flexDirection="row"
                    justifyContent="center"
                    alignItems={"center"}
                    sx={{
                      borderBottomStyle: "solid",
                      borderBottomWidth: "1px",
                      borderBottomColor: "#EAECF0",
                      borderTopStyle: "solid",
                      borderTopWidth: "1px",
                      borderTopColor: "#EAECF0",
                    }}
                  >
                    {item?.map((plot) => (
                      <div
                        key={plot?.unit_number || plot?.flatPosition}
                        onClick={() => handleClick(plot)}
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <div
                          key={plot?.unit_number || plot?.flatPosition}
                          onClick={() => handleClick(plot)}
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <Cell
                            flatStatus={plot?.flatStatus || plot?.status}
                            variant={"plotted"}
                            isUnitPlanAdded={
                              plot?.flatStatus || plot?.status === "AVAILABLE" ? true : false
                            }
                            flatLabel={plot?.flatLabel || plot?.unit_number || plot?.house_unit_number}
                            includedParking={plot?.included_parking}
                          />
                          <Text variant="typo14" sx={{ color: "#101828" }}>
                            {plot?.text}
                          </Text>
                        </div>
                      </div>
                    ))}
                  </Grid>
                </Grid>
              );
            })}
        </div>
    );
};

export default FloorTable;
