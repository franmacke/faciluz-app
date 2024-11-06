import JobMatchShortView from "@/components/JobMatchShortView";
import Urls from "@/constants/Urls";
import { useFetch } from "@/hooks/useFetch";
import { JobProps } from "@/props/JobProps";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Button, Constants, LoaderScreen, Text, View } from "react-native-ui-lib";

export default function MatchScreen() {

    const router = useRouter();

    const [jobIndex, setJobIndex] = useState(0);

    // Reemplazar con URL de la API de Pool
    const { response, error, loading } = useFetch<JobProps[]>(Urls.jobs.pool); 

    const handleNextJob = () => {
        setJobIndex(jobIndex + 1);   
    }

    const areJobsAvailable = response && response.length > 0 && jobIndex < response.length;
    const isFinalJob = response && jobIndex === response.length;


    if (loading) {
        // Esta logica me parece que la voy a tener que separar
        return (
            <View flex>
                <LoaderScreen message="Buscando trabajos" />
                <Button
                    margin-10 
                    label="Volver"
                    borderRadius={5}  
                    onPress={() => router.back()}
                />
            </View>
        )
    }

    return (
        <View style={{ paddingTop: Constants.statusBarHeight}} flex>
            { areJobsAvailable && 
                <JobMatchShortView {...response[jobIndex]} />
            }
            { isFinalJob && 
                <View flex center>
                    <Text text60BL>No hay más trabajos disponibles por el momento</Text> 
                </View>
            }
            <View padding-10 gap-10>
                { areJobsAvailable &&
                    <View gap-10>
                        <Button 
                            label="Aceptar trabajo"
                            borderRadius={5}  
                            onPress={() => {}}
                        />
                        <Button 
                            label="Pedir otro trabajo"
                            borderRadius={5}  outline
                            onPress={handleNextJob}    
                        />
                    </View>
                }
                <Button 
                    label="Volver"
                    borderRadius={5}  
                    outline
                    onPress={() => router.back()}
                />
            </View>
        </View>
    )
}