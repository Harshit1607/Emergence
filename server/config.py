from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    openrouter_api_key: str
    openrouter_model: str
    openrouter_base_url: str
    mongodb_uri: str
    cors_origins: list[str]
    site_url: str
    app_name: str

    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8")


settings = Settings()
