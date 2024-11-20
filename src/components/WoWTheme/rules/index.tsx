import React, {ReactNode} from 'react';
import {SectionBlock} from "@/Styles/SimpleBlocks";
import Box from "@/components/Blocks/Box";
import TagTitleSimple from "@/components/Blocks/TagTitleSimple";
import {INText, JTText} from "@/Styles/textBlocks";

const TW = ({children, color}: { children: ReactNode,color?:string }) => (
    <Box mb={"10px"} color={color}>
        <JTText> {children}</JTText>
    </Box>
)

const Rules = () => {
    return (
        <SectionBlock mt={"32px"} pt={["24px", "24px", "0px"]} px={["24px", "48px"]}>
            <Box p={48}>
                <TagTitleSimple>Rules</TagTitleSimple>
                <Box px={24}>
                    <INText>
                        Man in Black - Loot Council Rules
                    </INText>
                    <Box pt={"10px"}/>
                    <TW color={"red"}>1.Purpose</TW>
                    <TW>The goal of the loot system is to fairly distribute gear based on player contribution, raid
                        needs, and preparation, ensuring the overall progression of the guild.</TW>
                    <TW color={"red"}>2. Key Factors for Loot Distribution</TW>
                    <INText>
                        <TW>Loot Council considers the following criteria when distributing loot:</TW>
                        <TW>Raid Log Performance (%):</TW>
                        <TW>Players with higher contributions to the raid (DPS, HPS, survivability) will have higher
                            priority.</TW>
                        <TW>Example: A player with 100% log contributes significantly more than someone with 70%.</TW>
                        <Box px={"10px"}>
                            <TW>Mistakes (Errors):</TW>
                            <TW>Mistakes that negatively impact raid performance reduce loot priority.</TW>
                            <TW>Example: Avoidable deaths, missing mechanics, or other critical errors.</TW>
                        </Box>
                        <Box px={"10px"}>
                            <TW>Preparation:</TW>
                            <TW> Full preparation includes having proper consumables, enchants, and knowledge of
                                tactics.</TW>
                            <Box px={"10px"}>
                                <INText>
                                    <TW>Preparation levels:</TW>
                                    <TW>1 = Fully prepared (no penalty).</TW>
                                    <TW>0.5 = Partially prepared (small penalty).</TW>
                                    <TW>0 = Not prepared at all (larger penalty).</TW>
                                </INText>
                            </Box>
                        </Box>
                        <TW>Raid Leader Assignments:</TW>
                        <TW>If a player consistently fails to perform assigned tasks (e.g., interrupts, soaking
                            mechanics), their priority will be reduced.</TW>
                    </INText>
                </Box>
            </Box>
                <Box p={48}>
                    <TagTitleSimple>Правила</TagTitleSimple>
                    <Box px={24}>
                        <INText>
                            Man in Black - Loot Council
                        </INText>
                        <Box pt={"10px"}/>
                        <TW color={"red"}>1. Цель</TW>
                        <TW>Цель системы распределения добычи - справедливо распределять предметы, основываясь на вкладе игроков, потребностях рейда и подготовке, обеспечивая общий прогресс гильдии.</TW>
                        <TW color={"red"}>2. Ключевые факторы распределения лута</TW>
                        <INText>
                            <TW>Лут-Совет учитывает следующие критерии при распределении добычи:</TW>
                            <TW>Производительность в рейде (% логов):</TW>
                            <TW>Игроки с большим вкладом в рейд (DPS, HPS, выживаемость) получают более высокий приоритет.</TW>
                            <TW>Пример: игрок с 100% логом вносит значительно больший вклад, чем игрок с 70%.</TW>
                            <Box px={"10px"}>
                                <TW>Ошибки:</TW>
                                <TW>Ошибки, которые негативно влияют на эффективность рейда, снижают приоритет для получения лута.</TW>
                                <TW>Пример: Избежание смерти, несоблюдение механик или другие критические ошибки.</TW>
                            </Box>
                            <Box px={"10px"}>
                                <TW>Подготовка:</TW>
                                <TW>Полная подготовка включает в себя наличие расходников, зачарований и знание тактик.</TW>
                                <Box px={"10px"}>
                                    <INText>
                                        <TW>Уровни подготовки:</TW>
                                        <TW>1 = Полностью подготовлен (штраф отсутствует).</TW>
                                        <TW>0.5 = Подготовлен частично (небольшой штраф).</TW>
                                        <TW>0 = Не подготовлен вовсе (большой штраф).</TW>
                                    </INText>
                                </Box>
                            </Box>
                            <TW>Задания от Рейд Лидера:</TW>
                            <TW>Если игрок систематически не выполняет порученные задачи (например, сбивания каста, soak механики), его приоритет будет снижен.</TW>
                        </INText>
                    </Box>
                </Box>

        </SectionBlock>
    );
};

export default Rules;
